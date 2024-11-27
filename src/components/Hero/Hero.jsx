import { CiDesktopMouse2 } from "react-icons/ci";
import ocean from "../../assets/download.jpeg";
import googlecloud from "../../assets/images (1).jpeg";
import googleflare from "../../assets/images (2).jpeg";
import Azure from "../../assets/images.jpeg";
import Github from "../../assets/kisspng-scalable-vector-graphics-github-computer-icons-log-github-brand-octacat-social-svg-png-icon-free-down-5ba35d7db54fe5.6273953815374329577427.jpeg";
import Linode from "../../assets/Linode-Logo.wine.jpeg";
import { Helmet } from "react-helmet";

const partners = [
  { src: ocean, alt: "DigitalOcean" },
  { src: Azure, alt: "Azure" },
  { src: Github, alt: "GitHub" },
  { src: googlecloud, alt: "Google Cloud" },
  { src: Linode, alt: "Linode" },
  { src: googleflare, alt: "Cloudflare" },
];

export default function Hero() {
  return (
    <div className="bg-red-950 dark:bg-gray-900">
      <Helmet>
        <title>Hero Section - From Concept to Code</title>
        <meta name="description" content="We help brands and B2B enterprises build amazing websites that convert visitors to paying customers." />
      </Helmet>
      <div className="min-h-screen py-20">
        <div className="text-center pt-20">
          <h1 className="text-white dark:text-gray-100 text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            From Concept to Code
          </h1>
          <h2 className="text-[#DC2626] dark:text-red-400 text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            We Make IT Happen
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-sm md:text-base mb-8 max-w-xl mx-auto">
            We Help Brands And B2B Enterprises Build Amazing
            <br className="hidden sm:block" />
            Websites That Convert Their Visitors To Paying Customers.
          </p>
          <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Lets have a call
          </button>

          <div className="mt-7">
            <CiDesktopMouse2 className="mx-auto" size={30} color="white" />
            <div className="w-px h-32 bg-gray-700 mx-auto mb-16"></div>
          </div>

          <div className="text-center">
            <h3 className="text-gray-400 dark:text-gray-300 text-sm mb-12">
              TRUSTED BY OUR PARTNERS
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center max-w-4xl mx-auto opacity-80">
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  className="h-12 w-auto rounded-md"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
