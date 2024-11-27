import { Helmet } from "react-helmet";
import Tired from "../../assets/tired-at-work.jpeg";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Blog() {
  return (
    <section className="bg-red-950 dark:bg-gray-900 py-12 px-4">
      <Helmet>
        <title>Blog - Daily News About Startup Companies</title>
        <meta name="description" content="Read daily news about startup companies and the latest trends in the industry." />
        <meta name="keywords" content="blog, startup, news, technology, React" />
        <meta name="author" content="Your Name" />
      </Helmet>
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-gray-400 dark:text-gray-300 text-sm uppercase mb-2">
            Read Our Blog
          </h2>
          <h1 className="text-white dark:text-gray-100 text-2xl md:text-4xl font-bold">
            Read Daily News About Startup Companies
          </h1>
        </div>

        {/* Blog Card */}
        <div className="bg-red-900 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex md:items-center">
          {/* Blog Image */}
          <div className="md:w-1/2">
            <img
              src={Tired}
              alt="Blog"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Blog Content */}
          <div className="p-6 md:w-1/2">
            <h3 className="text-white dark:text-gray-100 text-xl font-semibold mb-4">
              Not Another Framework
            </h3>
            <p className="text-gray-400 dark:text-gray-300 mb-6">
              We brought all the Remix goodies over to React Router and made
              improvements in the process. Now it is time to bring those
              improved APIs back over to Remix where they started!
            </p>
            <ul className="text-gray-400 dark:text-gray-300 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-red-600">&#8226;</span> Collaboration
                Tools
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">&#8226;</span> Collaboration
                Tools
              </li>
            </ul>
            <div className="flex justify-end items-end px-4">
              {/* Arrow Icon */}
              <ImArrowUpRight2
                size={50}
                className="border p-3 bg-white dark:bg-gray-700 rounded-full border-gray-500 text-black dark:text-white text-2xl cursor-pointer hover:text-red-600"
              />
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-red-600 text-white dark:text-gray-100 text-lg font-medium rounded-md hover:bg-red-800 hover:border-red-800 transition-colors">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
