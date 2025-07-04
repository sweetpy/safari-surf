import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    image: 'https://images.pexels.com/photos/936555/pexels-photo-936555.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&fm=webp',
    text: 'Fantastic service and super fast WiFi on our safari!',
    name: 'Liam N.',
    location: 'UK'
  },
  {
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&fm=webp',
    text: 'Reliable connection all through Zanzibar. Highly recommend.',
    name: 'Aisha K.',
    location: 'Kenya'
  },
  {
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&fm=webp',
    text: 'Made remote work a breeze while exploring Tanzania.',
    name: 'Carlos M.',
    location: 'Spain'
  }
];

const GoogleReviews = () => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Google Reviews</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        slidesPerView={1}
        className="rounded-2xl"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full mx-auto object-cover" />
              <p className="text-gray-700 italic">"{review.text}"</p>
              <div className="font-semibold text-gray-900">{review.name}</div>
              <div className="text-sm text-gray-500">{review.location}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default GoogleReviews;
