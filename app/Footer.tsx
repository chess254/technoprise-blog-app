import React from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-gray-300 p-1 flex justify-between items-center fixed bottom-0 w-full z-50">
      <Link href={`/`}>
        <Image
          src="/bloglogo.png"
          width={144}
          height={57}
          alt="Picture of the author"
        />
      </Link>
      <div className="text-black">Copyright @2024 . Blogpost</div>
    </footer>
  );
}

export default Footer;
