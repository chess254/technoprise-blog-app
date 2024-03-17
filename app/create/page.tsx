import Footer from "../Footer";
import Header from "../Header";

export default function Posts() {
  return (
    <>
      <Header />
      <main className="flex-grow p-4 flex justify-center">
        <div className="flex items-center justify-center p-12 w-full max-w-[768px]">
          <div className="mx-auto w-full bg-white">
            <form
              className="py-6 px-9"
              action="https://formbold.com/s/FORM_ID"
              method="POST"
            >
              <div className="mb-5">
                <p className="text-black font-bold">Create Blog Post</p>
                <p className="text-black text-sm">
                  Enter your blog detailshere. Click save when you're done.
                </p>
                <div className="my-4">
                  <label
                    className="block text-gray-700 text-xs mb-0"
                    htmlFor="username"
                  >
                    Blog Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Harry Potter"
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
                    className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    type="text"
                    placeholder="31/1/2024"
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
                    className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="slug"
                    type="text"
                    placeholder="harry-potter"
                  />
                </div>
              </div>

              <div className="mb-6 pt-4">
                <label className="mb-0 block text-xs text-gray-700">
                  Image
                </label>

                <div className="mb-8">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="sr-only"
                  />
                  <label
                    htmlFor="file"
                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span className="mb-2 block text-xs font-small text-[#07074D]">
                        Please upload images in 100x100 pixels size, in either
                        PNG or JPEG format.{" "}
                      </span>

                      <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
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
