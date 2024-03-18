"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import blogData from "../blogData";
import { redirect } from "next/navigation";

export default function Posts() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    slug: "",
    content: "",
    image: "",
  });

  // const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlogData = [...blogData, formData];
    blogData.push(formData);
    console.log("Updated Blog Data:", updatedBlogData);
    console.log(blogData);
    redirect("/");
  };

  return (
    <>
      <main className="flex-grow p-4 flex justify-center">
        <div className="flex items-center justify-center p-12 w-full max-w-[768px]">
          <div className="mx-auto w-full bg-white">
            <form className="py-6 px-9" onSubmit={handleSubmit}>
              <div className="mb-5">
                <p className="text-black font-bold">Create Blog Post</p>
                <p className="text-black text-sm">
                  Enter your blog details here. Click save when you are done.
                </p>
                <div className="my-4">
                  <label
                    className="block text-gray-700 text-xs mb-0"
                    htmlFor="title"
                  >
                    Blog Title
                  </label>
                  <input
                    className="placeholder:text-xs shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Harry Potter"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="my-4">
                  <label
                    className="block text-gray-700 text-xs mb-0"
                    htmlFor="date"
                  >
                    Blog Date
                  </label>
                  <input
                    className="placeholder:text-xs shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    type="text"
                    placeholder="31/1/2024"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="my-4">
                  <label
                    className="block text-gray-700 text-xs mb-0"
                    htmlFor="slug"
                  >
                    Slug
                  </label>
                  <input
                    className="placeholder:text-xs shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="slug"
                    type="text"
                    placeholder="harry-potter"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-0 block text-xs text-gray-700">
                  Image
                </label>

                <div className="mb-8">{/* File input */}</div>
                <div className="my-4">
                  <label
                    className="block text-gray-700 text-xs mb-0"
                    htmlFor="content"
                  >
                    Content
                  </label>
                  <textarea
                    className="placeholder:text-xs shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="content"
                    rows={8}
                    placeholder="Type Here"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Send File
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
