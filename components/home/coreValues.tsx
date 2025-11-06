import React from "react";
import Image from "next/image";
import gamification from "@/public/icons/gamification.svg";
import mentorship from "@/public/icons/mentorship.svg";
import access from "@/public/icons/access.svg";
import ai from "@/public/icons/aiInsight.svg";
import laptopBg from "@/public/images/laptopBg.png";
import laptopMockUp from "@/public/images/laptop.svg";

export default function CoreValues() {
  const values = [
    {
      icon: <Image src={access} alt="" className="object-cover" />,
      title: "Access For All",
      description:
        "Affordable, curriculum-aligned learning resources accessible to every student, regardless of background or location.",
    },
    {
      icon: <Image src={ai} alt="" className="object-cover" />,
      title: "Predictive AI Insights",
      description:
        "Real-time, personalized predictions for likely exam topics and mastery gaps—so students always focus where it matters most.",
    },
    {
      icon: <Image src={gamification} alt="" className="object-cover" />,
      title: "Motivation Through Gamification",
      description:
        "Badges, points, and learner leaderboards turn hard work into an engaging journey that celebrates progress.",
    },
    {
      icon: <Image src={mentorship} alt="" className="object-cover" />,
      title: "Mentorship & Support",
      description:
        "Live 1-on-1 or group support ensures every student gets practical help, assignment feedback, and expert guidance.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Laptop Mockup */}
          <div
            className="relative rounded-[100px] h-[400px] sm:h-[500px] lg:h-[550px] overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom, #1E56AF, #0D2449), url(${laptopBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="absolute inset-0 bg-black/10 rounded-[100px]" />
            <Image
              src={laptopMockUp}
              alt="Laptop mockup"
              className="absolute top-2/8 left-1/2 -translate-x-1/2 w-3/4 h-auto"
              priority
            />
          </div>

          {/* Right Side - Core Values */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Our Core{" "}
              <span className="inline-block bg-cyan-400 text-white px-2 ml-1">
                Values
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
              The principles that guide everything we do at Prypar
            </p>

            {/* Values List */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12  rounded-xl flex items-center justify-center text-white shadow-md">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
