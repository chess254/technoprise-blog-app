"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import blogData from "./blogData";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You may fetch data for the new page here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
          <div className="col-span-3">
            <h1 className="text-3xl font-bold mt-8 mb-4">
              The Accessibility Blog
            </h1>
            <p className="text-lg mb-8">The voice of the excluded</p>
          </div>
          {blogData.map((blog, index) => (
            // <div
            //   key={index}
            //   className="border border-gray-300 rounded p-4 space-y-4"
            //   style={{ width: "337px", height: "387px" }}
            //   role="article"
            // >
            //   <img
            //     src="https://res.cloudinary.com/doyv2rmqe/image/upload/v1710677136/enfrsn180d8d3as0s1zw.jpg"
            //     alt="Article Image"
            //     className="w-full h-179 object-cover rounded-t"
            //   />
            //   <div className="text-sm text-gray-500">Date</div>
            //   <h2 className="text-xl font-bold">Title</h2>
            //   <p className="mt-2">Content</p>
            // </div>

            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link href={`/post/${blog.slug}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </Link>
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://res.cloudinary.com/doyv2rmqe/image/upload/v1710677136/enfrsn180d8d3as0s1zw.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {blog.content}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
          {/* Pagination */}
          <div className="col-span-3 flex justify-center mt-4 mb-20">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`p-2 mx-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                } rounded`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
