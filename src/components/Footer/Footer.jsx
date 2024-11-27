import { Helmet } from "react-helmet";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Helmet>
        <title>Footer - Stay Connected</title>
        <meta name="description" content="Connect with us on social media and subscribe to our newsletter." />
      </Helmet>
      <footer className="bg-red-950 dark:bg-gray-900 pt-10 pb-8">
        <div className="container mx-auto px-4">
          {/* Newsletter Section */}
          <div className="p-4 flex flex-col md:flex-row justify-between items-center border border-gray-600 rounded-lg mb-10 gap-4">
            <div className="text-white text-center md:text-left">
              <h1 className="text-xl font-bold">Newsletter</h1>
              <p className="text-gray-400 dark:text-gray-300 text-sm">
                Be the first one to know about our technologies and innovations.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="px-6 py-2 text-lg font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-row md:flex-row justify-evenly items-start text-center md:text-left gap-10">
            {/* Company */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Works", href: "#works" },
                  { label: "Career", href: "#career" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Help</h3>
              <ul className="space-y-2">
                {[
                  { label: "Customer support", href: "#customer-support" },
                  { label: "Terms & Conditions", href: "#terms-conditions" },
                  { label: "Privacy Policy", href: "#privacy-policy" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {[
                  { label: "Free ebooks", href: "#free-ebooks" },
                  {
                    label: "Development Tutorial",
                    href: "#development-tutorial",
                  },
                  { label: "How to - Blog", href: "#how-to-blog" },
                  { label: "Youtube Playlist", href: "#youtube-playlist" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
              <p className="text-gray-400 dark:text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Your Company. All rights
                reserved.
              </p>
              {/* Social Media */}
              <div className="flex justify-center md:justify-start space-x-4">
                {[
                  { icon: <FaTwitter />, label: "Twitter", href: "#twitter" },
                  { icon: <FaFacebook />, label: "Facebook", href: "#facebook" },
                  {
                    icon: <FaInstagram />,
                    label: "Instagram",
                    href: "#instagram",
                  },
                  { icon: <FaGithub />, label: "GitHub", href: "#github" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 dark:text-gray-300 hover:text-red-600 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
