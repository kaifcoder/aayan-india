import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mohammad Badar",
    text: `Application development is creating a set of programs or techniques that will help perform different tasks required by the business. Thus, Application development is very much essential for the portability and ease of use of mobile for the audience. Mobile application sends information from different apps to the customers. Sending messages or spreading awareness is made easier through mobile applications.`,
    image: "src\\assets\\images\\person.png",
  },
  {
    name: "Jennifer Laxson",
    text: `Application development is creating a set of programs or techniques that will help perform different tasks required by the business. Thus, Application development is very much essential for the portability and ease of use of mobile for the audience. Mobile application sends information from different apps to the customers. Sending messages or spreading awareness is made easier through mobile applications.`,
    image: "src\\assets\\images\\person.png",
  },
  {
    name: "Daniel Powell",
    text: `Application development is creating a set of programs or techniques that will help perform different tasks required by the business. Thus, Application development is very much essential for the portability and ease of use of mobile for the audience. Mobile application sends information from different apps to the customers. Sending messages or spreading awareness is made easier through mobile applications.`,
    image: "src\\assets\\images\\person.png",
  },
  {
    name: "Daniel Powell",
    text: `Application development is creating a set of programs or techniques that will help perform different tasks required by the business. Thus, Application development is very much essential for the portability and ease of use of mobile for the audience. Mobile application sends information from different apps to the customers. Sending messages or spreading awareness is made easier through mobile applications.`,
    image: "src\\assets\\images\\person.png",
  },
  {
    name: "Daniel Powell",
    text: `Application development is creating a set of programs or techniques that will help perform different tasks required by the business. Thus, Application development is very much essential for the portability and ease of use of mobile for the audience. Mobile application sends information from different apps to the customers. Sending messages or spreading awareness is made easier through mobile applications.`,
    image: "src\\assets\\images\\person.png",
  },
];

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,

    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll(".slick-slide");
      slides.forEach((slide) => slide.classList.remove("scale-105", "z-10"));
      slides[next + 1].classList.add("scale-105", "z-10");
    },
    afterChange: (current) => {
      const slides = document.querySelectorAll(".slick-slide");
      slides.forEach((slide) => slide.classList.remove("scale-105", "z-10"));
      slides[current + 1].classList.add("scale-105", "z-10");
    },
  };

  return (
    <div className="py-12">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-6 ml-8 text-6xl font-extrabold text-center text-gray-900">
          What our customers say?
        </h2>
        <div className="flex items-center justify-center w-full my-8">
          <img src="src\assets\images\testimonial-sub.png" className="" />
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 mx-4 transition duration-500 transform bg-white shadow-md rounded-xl"
            >
              <p className="text-lg font-thin text-gray-600">
                {testimonial.text}
              </p>
              <div className="flex flex-col items-center mt-6">
                <img
                  className="object-cover w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
