import React from "react";

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-muted" id="why-choose">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 justify-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">WHY CHOOSE</h2>
          <span className="text-3xl font-bold text-gray-900">US</span>
          <div className="h-0.5 w-12 bg-gray-900"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/src/assets/quality_icon.png" 
                alt="Quality Assurance" 
                className="w-12 h-12 mb-4" 
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                We meticulously select and vet each product to ensure it meets our stringent quality standards.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/src/assets/cart_icon.png" 
                alt="Convenience" 
                className="w-12 h-12 mb-4" 
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Convenience</h3>
              <p className="text-gray-600">
                With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/src/assets/support_img.png" 
                alt="Exceptional Customer Service" 
                className="w-12 h-12 mb-4" 
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exceptional Customer Service</h3>
              <p className="text-gray-600">
                Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
