import React from "react";

const ContactSection = () => {
  return React.createElement(
    "section",
    { className: "py-20 bg-white", id: "contact" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "div",
        { className: "flex items-center gap-4 justify-center mb-16" },
        React.createElement("h2", { className: "text-3xl font-bold text-gray-900" }, "CONTACT"),
        React.createElement("span", { className: "text-3xl font-bold text-gray-900" }, "US"),
        React.createElement("div", { className: "h-0.5 w-12 bg-gray-900" }),
       
      ),
      React.createElement(
        "div",
        { className: "flex flex-col lg:flex-row items-center gap-12" },
        React.createElement(
          "div",
          { className: "lg:w-1/2" },
          React.createElement("img", {
            src: "/src/assets/contact_img.png",
            alt: "Workspace setup",
            className: "rounded-lg shadow-lg w-full",
          })
        ),
        React.createElement(
          "div",
          { className: "lg:w-1/2 space-y-8" },
          React.createElement(
            "div",
            null,
            React.createElement("h3", { className: "text-2xl font-bold text-gray-900 mb-4" }, "Our Store"),
            React.createElement("p", { className: "text-gray-600" }, "54709 Willms Station"),
            React.createElement("p", { className: "text-gray-600" }, "Suite 350, Washington, USA")
          ),
          React.createElement(
            "div",
            null,
            React.createElement("p", { className: "text-gray-600" }, "Tel: (415) 555-0132"),
            React.createElement("p", { className: "text-gray-600" }, "Email: admin@forever.com")
          ),
          React.createElement(
            "div",
            null,
            React.createElement("h3", { className: "text-2xl font-bold text-gray-900 mb-4" }, "Careers at Forever"),
            React.createElement("p", { className: "text-gray-600 mb-6" }, "Learn more about our teams and job openings."),
            // React.createElement(Button, {
            //   className: "bg-primary hover:bg-primary/90 text-white",
            //   onClick: () => (window.location.href = "#careers"),
            //   children: "Explore Jobs",
            // })
          )
        )
      )
    )
  );
};

export default ContactSection;
