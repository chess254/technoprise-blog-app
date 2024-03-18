"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import blogData from "../blogData";
import { redirect } from "next/navigation";
import { useEdgeStore } from "../lib/edgestore";
import Link from "next/link";

export default function Posts() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    slug: "",
    content: "",
    image: "",
  });

  const [file, setFile] = useState<File>();
  const [urls, setUrls] = useState<{
    url: string | undefined;
    thumbnailUrl: string;
  }>();
  const { edgestore } = useEdgeStore();

  // const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.image = urls?.url;
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
                <label
                  className="mb-0 block text-xs text-gray-700"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  id="image"
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files?.[0]);
                  }}
                />

                <p className="text-black">
                  {urls?.url && <Link href={urls.url}>{urls.url}</Link>}
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={async () => {
                    if (file) {
                      const res = await edgestore.myPublicImages.upload({
                        file,
                      });
                      //save data to db
                      setUrls({
                        url: res.url,
                        thumbnailUrl: res.thumbnailUrl,
                      });
                      console.log(">>>>>>>>url" + res.url);
                      setTimeout(() => {
                        setFormData({ ...formData, image: res.url });
                      }, 4000); // Use res.url instead of urls?.url
                      // setFormData({ ...formData, image: res.url }); // Set formData.image with res.url
                    }
                  }}
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
