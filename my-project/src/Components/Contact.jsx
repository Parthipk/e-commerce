import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    return (
        <div className="flex flex-wrap justify-between p-6 mt-40 ">
            <div className="w-full md:w-2/5 p-4">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                    We value your feedback and inquiries. Please fill out the form on the right, or visit us at our location. 
                </p>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-[250px] rounded-lg shadow-lg "
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509661!2d144.95373631531683!3d-37.81720997975158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f6c4a2b%3A0x5045675218ceed28!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635262292685!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="w-full md:w-3/5 p-4">
          
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        resetForm();
                    }}
                >
                    {() => (
                        <Form className="bg-transparent p-6 ">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <Field
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <Field
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <Field
                                    as="textarea"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                />
                                <ErrorMessage name="message" component="div" className="text-red-600 text-sm mt-1" />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
