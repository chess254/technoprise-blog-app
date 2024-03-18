"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import blogData from "./blogData";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link href={`/post/${blog.slug}`}>
                <img
                  className="rounded-t-lg"
                  src="https://res.cloudinary.com/doyv2rmqe/image/upload/v1710677136/enfrsn180d8d3as0s1zw.jpg"
                  alt=""
                />
              </Link>
              <div className="p-5">
                <Link href={`/post/${blog.slug}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                  </h5>
                </Link>{" "}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {blog.content.substring(0, 150)}...
                </p>
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
