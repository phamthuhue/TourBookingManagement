import React from 'react'

import { PiMountainsBold } from "react-icons/pi";

import { Items } from './Items'
import { tours } from './../../assets/data/tours';

export const ToursItems = () => {
  const loading = false; // Không dùng useFetch, nên loading là false
  const error = null;    // Không có lỗi khi dùng file dữ liệu

  return (
    <section className='max-w-[1640] px-4 py-12 mx-8 mb-10 text-sm'>
      <div className='sectionTitle'>
        <PiMountainsBold size={20} className='text-darkGreen'/>
        <div>Our Tours</div>
        <p>Find your next destination</p>
      </div>
      <div className='px-4'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}.</p>}
      </div>
      {!loading && !error && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
          {tours.map(tour => (
            <Items
              key={tour.id}
              photo={tour.photo}
              title={tour.title}
              city={tour.city}
              price={tour.price}
              id={tour.id}
            />
          ))}
        </div>
      )}
    </section>
  );
};
