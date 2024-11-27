import { Helmet } from "react-helmet";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch</title>
        <meta name="description" content="Contact us for project inquiries and support." />
      </Helmet>
      <div className="bg-red-950 dark:bg-gray-900">
        <div className="flex justify-between items-center mx-12">
          {/* the left div Reverse call */}
          <div className="w-1/2">
            <p className="text-gray-500 dark:text-gray-300 text-lg">Got a project in mind?</p>
            <h1 className="text-white dark:text-gray-100 text-[2rem]">Reserve A Call</h1>
            <div className="text-gray-500 dark:text-gray-300 text-xl flex justify-center items-center gap-4 flex-col pt-2">
              <div className="flex justify-center items-start flex-col">
                <h2 className="text-white dark:text-gray-100 text-lg mb-4">What to Expect</h2>
                <ul className="list-disc list-inside">
                  <li>An in-depth session to understand your needs</li>
                  <li>Learn which plan is right for your team</li>
                  <li>Get onboarding help</li>
                </ul>
              </div>
            </div>
            <div className="support-container text-gray-500 dark:text-gray-300 my-4">
              <h1 className="support-title py-5 text-white dark:text-gray-100">
                Technical support or some query?
              </h1>
              <div className="flex justify-start gap-4">
                <p className="support-description text-lg">Contact support</p>
                <TbArrowNarrowRight size={30} className="text-gray-500 dark:text-gray-300" />
              </div>
            </div>
          </div>

          {/* the right div Reverse call */}
          <div className="max-w-md mx-auto bg-red-950 dark:bg-gray-800 text-gray-500 dark:text-gray-300 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tell us about yourself.</h2>
            <form action="#" method="POST">
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="full-name" className="block text-sm font-medium">Full Name</label>
                <input type="text" id="full-name" name="full-name" placeholder="Your Full Name" className="w-full mt-1 p-2 bg-red-800 dark:bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none" required />
              </div>

              {/* Work Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">Work Email</label>
                <input type="email" id="email" name="email" placeholder="Your Work Email" className="w-full mt-1 p-2 bg-red-800 dark:bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none" required />
              </div>

              {/* Company Size */}
              <div className="mb-4">
                <label htmlFor="company-size" className="block text-sm font-medium">Company Size</label>
                <select id="company-size" name="company-size" className="w-full mt-1 p-2 bg-red-800 dark:bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none">
                  <option value="">Select Company Size</option>
                  <option value="1-20">1-20</option>
                  <option value="21-50">21-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>

              {/* How Can We Help */}
              <div className="mb-4">
                <label htmlFor="help" className="block text-sm font-medium">How Can We Help?</label>
                <textarea id="help" name="help" rows={4} placeholder="Write your message here..." className="w-full mt-1 p-2 bg-red-800 dark:bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none" required />
              </div>

              {/* Contact Information */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">You Can Also Email Us At <span className="text-red-500">Apac@Redtilt.Team</span></p>

              {/* Submit Button */}
              <div>
                <button type="submit" className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
