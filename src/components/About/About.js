import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden flex relative">
          <div className="px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-16 grid">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
              About GeorgeShop 🛍️
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-7 text-gray-700">
              Welcome to GeorgeShop, your one-stop destination for exquisite
              clothing, stunning jewelry, and much more. At GeorgeShop, we are
              passionate about bringing you the latest trends and timeless
              pieces that complement your unique style.
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-700">
              Our mission is to provide high-quality products that blend
              elegance and functionality. We believe in the power of fashion to
              express individuality and enhance confidence. Whether you are
              looking for a statement necklace, a chic dress, or everyday
              essentials, we have something for everyone.
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-700">
              At GeorgeShop, customer satisfaction is our top priority. We are
              committed to offering excellent customer service, ensuring a
              seamless shopping experience from start to finish. Thank you for
              choosing GeorgeShop as your trusted fashion partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
