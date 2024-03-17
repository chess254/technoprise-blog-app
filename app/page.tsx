"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You may fetch data for the new page here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl">
          <div className="col-span-3">
            <h1 className="text-3xl font-bold mt-8 mb-4">
              The Accessibility Blog
            </h1>
            <p className="text-lg mb-8">The voice of the excluded</p>
          </div>
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded p-4 space-y-4"
              style={{ width: "337px", height: "387px" }}
              role="article"
            >
              <img
                src="image-url"
                alt="Article Image"
                className="w-full h-179 object-cover rounded-t"
              />
              <div className="text-sm text-gray-500">Date</div>
              <h2 className="text-xl font-bold">Title</h2>
              <p className="mt-2">Content</p>
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
