import { useState } from "react";
import { FaCode, FaCloud, FaShieldAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet";

// Import the logos
import jsLogo from "../../assets/js.jpeg";
import flutterLogo from "../../assets/Flutter.jpeg";
import prismaLogo from "../../assets/prisma.jpeg";
import postgresqlLogo from "../../assets/php.jpeg";
import remixLogo from "../../assets/Remix.jpeg";
import mongodbLogo from "../../assets/mongo.jpeg";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Development",
      icon: <FaCode size={30} className="md:w-10 md:h-10" />,
      details: [
        "UI/UX Design",
        "DevOps",
        "Web Design",
        "Frontend Development",
        "Backend Development",
      ],
    },
    {
      id: 2,
      title: "MSP",
      icon: <FaShieldAlt size={30} className="md:w-10 md:h-10" />,
      details: [
        "Infrastructure Management",
        "Managed Monitoring",
        "Business Continuity",
        "Managed Cyber",
      ],
    },
    {
      id: 3,
      title: "Cloud",
      icon: <FaCloud size={30} className="md:w-10 md:h-10" />,
      details: [
        "AWS",
        "Azure",
        "Multi-Cloud",
        "SRE Strategy",
        "Containerization",
      ],
    },
    {
      id: 4,
      title: "Cyber Security",
      icon: <FaShieldAlt size={30} className="md:w-10 md:h-10" />,
      details: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Incident Response",
        "Security Consulting",
      ],
    },
  ];

  const logos = [
    { id: 1, src: jsLogo, alt: "JavaScript", title: "JavaScript" },
    { id: 2, src: flutterLogo, alt: "Flutter", title: "Flutter" },
    { id: 3, src: prismaLogo, alt: "Prisma", title: "Prisma" },
    { id: 4, src: postgresqlLogo, alt: "PostgreSQL", title: "PostgreSQL" },
    { id: 5, src: remixLogo, alt: "Remix", title: "Remix" },
    { id: 6, src: mongodbLogo, alt: "MongoDB", title: "MongoDB" },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="bg-red-950 dark:bg-gray-900 min-h-screen flex flex-col items-center py-8 md:py-12 px-2 md:px-4 lg:px-6 overflow-hidden">
      <Helmet>
        <title>Our Services - What We Offer</title>
        <meta
          name="description"
          content="Explore our services in development, MSP, cloud, and cyber security."
        />
      </Helmet>
      {/* Intro Section */}
      <div className="text-center text-white mb-8 md:mb-12 w-full max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          What we offer
        </h2>
        <span className="text-sm md:text-base lg:text-lg px-4 md:px-6 py-1 md:py-2 border-2 border-red-700 rounded-full inline-block dark:bg-gray-800">
          Our Experts Will Help You In Following Fields
        </span>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl px-2 md:px-4 dark:bg-gray-900">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-red-700 dark:bg-gray-900 rounded-lg shadow-lg p-4 md:p-6 text-white w-full h-[300px] md:h-[340px] lg:h-[360px] transform hover:scale-105 transition-transform duration-300"
          >
            {/* Number in Background */}
            <div className="absolute text-4xl md:text-6xl lg:text-[8rem] font-bold text-white opacity-10 top-2 left-2">
              {service.id.toString().padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex justify-center items-center gap-2 pt-[2rem] md:pt-[3rem] lg:pt-[5rem]">
                {service.icon}
                <h3 className="text-base md:text-lg font-bold">
                  {service.title}
                </h3>
              </div>

              {/* Card Details */}
              <div className="bg-red-800 dark:bg-gray-900 dark:border-white border-2 border-b-0 border-r-0 border-red-600 absolute top-[5rem] md:top-[7rem] lg:top-[8rem] -right-4 rounded-md p-3 md:p-4 w-full">
                <ul className="min-h-full text-left flex justify-between flex-col gap-1 md:gap-2 text-xs md:text-sm lg:text-base">
                  {service.details.map((detail, index) => (
                    <li
                      key={index}
                      className="hover:text-red-300 transition-colors duration-200"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper Section */}
      <div className="mt-12 md:mt-16 text-white text-center w-full max-w-7xl px-2 md:px-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
          Our Superpowers
        </h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          className="w-full"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex flex-col items-center p-2 transform hover:scale-110 transition-transform duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 md:mb-4 rounded-lg object-contain"
                />
                <span className="text-sm md:text-base lg:text-lg font-bold">
                  {logo.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="mt-4 md:mt-6 lg:mt-8 text-white">
          <span className="bg-gray-700 dark:bg-gray-600 px-3 py-2 md:px-4 md:py-3 rounded-full text-sm md:text-base lg:text-lg font-bold">
            &lt; {currentSlide} / {logos.length} &gt;
          </span>
        </div>
      </div>
    </div>
  );
}
