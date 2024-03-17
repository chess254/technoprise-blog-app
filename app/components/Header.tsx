import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <nav className="bg-gray-300 p-1 flex justify-between items-center mx-auto w-full">
      {/* <div className="text-xl">Logo</div> */}
      <div className="prose prose-xl mx-auto w-full max-w-6xl flex justify-between flex-col sm:flex-row">
        <Link href={`/`}>
          <Image
            src="/bloglogo.png"
            width={144}
            height={57}
            alt="Picture of the author"
          />
        </Link>
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="p-2 mr-2 border border-gray-300 rounded text-black"
            aria-label="Search"
          />
          <button className="p-2 bg-black text-white rounded">
            <Link href={`/create`}>Create Blog Post</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
