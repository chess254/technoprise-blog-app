"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You may fetch data for the new page here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-200 p-4 flex justify-between items-center">
        <div className="text-xl">Logo</div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="p-2 mr-2 border border-gray-300 rounded"
            aria-label="Search"
          />
          <button className="p-2 bg-blue-500 text-white rounded">Search</button>
        </div>
      </header>
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
          <div className="col-span-3 flex justify-center mt-4">
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
      <footer className="bg-gray-200 p-4 flex justify-between items-center">
        <div>Footer Logo</div>
        <div>Footer Text</div>
      </footer>
    </div>
  );
}