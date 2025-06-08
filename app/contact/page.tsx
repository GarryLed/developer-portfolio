"use client";


import { useState } from "react";   
import { FaYoutube, FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";


const ContactPage = () => {
    // Form state 
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form submitted:", form);
        alert("Thank you for your message!");
    };

  return (
    
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-600 dark:text-gray-300">Contact Me</h1>

        <p className="mb-8 text-center text-gray-600 dark:text-300">
            I’d love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out using the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1 block w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                />
            </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">or reach me at: <a href="mailto:garryledwith@gmail.com" className="text-indigo-600 dark:text-indigo-400">garryledwith@gmail.com</a></p>

        <div className="flex justify-center gap-6 text-2xl mt-4">
          <a
            href="https://www.youtube.com/@garcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:scale-110 transition"
            aria-label="GarCodes YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@garcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:scale-110 transition"
            aria-label="GarCodes TikTok"
          >
            <FaTiktok />
          </a>

            <a
                href="https://github.com/garcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:scale-110 transition"
                aria-label="GarCodes GitHub"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/garryledwith/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:scale-110 transition"
                aria-label="GarCodes LinkedIn"
            >
                <FaLinkedin />
            </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage  