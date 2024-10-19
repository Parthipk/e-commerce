// src/components/News.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchNews = async () => {
  const response = await axios.get(
    'https://newsdata.io/api/1/news?apikey=pub_526414371ca1f11bdb1053bb8fcb45162abf5&q=mobile%20phones&language=en&category=technology'
  );
  return response.data.articles;
};

const ArticleItem = ({ article }) => (
  <li className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h2 className="text-xl font-bold text-gray-800">{article.title}</h2>
    <p className="text-gray-600">{article.description}</p>
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Read more
    </a>
  </li>
);

const News = () => {
  const { data, error, isLoading } = useQuery(['news'], fetchNews);

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-red-600 text-center">Error fetching news: {error.response?.data.message || error.message}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Top News Articles</h1>
      <ul>
        {data.map((article) => (
          <ArticleItem key={article.url} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default News;
