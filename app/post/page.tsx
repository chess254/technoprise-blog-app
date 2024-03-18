"use client";

import { useParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import blogData from "../blogData";

export default function Post() {
  const router = useParams();
  const { slug } = router as { slug: string };
  const post = blogData.find((post) => post.slug === slug);
  console.log(">>>>post", post);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <img src={post.image} alt={post.title} className="mb-4 rounded-lg" />
          <p className="text-gray-600 mb-4">{post.date}</p>
          <p className="text-gray-800">{post.content}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
