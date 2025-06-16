import React from "react";

const AboutSection = () => {
  return React.createElement(
    "section",
    { className: "py-20 bg-white", id: "about" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "div",
        { className: "flex flex-col lg:flex-row items-center gap-12" },
        React.createElement(
          "div",
          { className: "lg:w-1/2" },
          React.createElement("img", {
            src: "/src/assets/about_img.png",
            alt: "Fashion items layout",
            className: "rounded-lg shadow-lg w-full",
          })
        ),
        React.createElement(
          "div",
          { className: "lg:w-1/2 space-y-6" },
          React.createElement(
            "div",
            { className: "flex items-center gap-4 mb-8" },
            React.createElement("h2", { className: "text-3xl font-bold text-gray-900" }, "ABOUT"),
            React.createElement("span", { className: "text-3xl font-bold text-gray-900" }, "US"),
            React.createElement("div", { className: "h-0.5 w-12 bg-gray-900" }),
          ),
          React.createElement(
            "p",
            { className: "text-gray-600 leading-relaxed" },
            "Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes."
          ),
          React.createElement(
            "p",
            { className: "text-gray-600 leading-relaxed" },
            "Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers."
          ),
          React.createElement(
            "div",
            { className: "mt-8" },
            React.createElement("h3", { className: "text-xl font-bold text-gray-900 mb-4" }, "Our Mission"),
            React.createElement(
              "p",
              { className: "text-gray-600 leading-relaxed" },
              "Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond."
            )
          )
        )
      )
    )
  );
};

export default AboutSection;
