import React, { forwardRef, Ref } from 'react';
import Image, { ImageProps } from 'next/image';

interface ServiceProps {
  iconSrc: ImageProps['src'];
  title: string;
  description: string;
  blockStyle?: string;
  isListVisible?: string;
  listItem1?: string;
  listItem2?: string;
  sectionStyle?: string; // Добавляем новый параметр
}

const Service = forwardRef<HTMLDivElement, ServiceProps>(({
  iconSrc,
  title,
  description,
  blockStyle,
  isListVisible,
  listItem1,
  listItem2,
  sectionStyle // Используем новый параметр
}, ref) => {
  return (
    <div className={blockStyle} ref={ref}>
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8" data-aos="zoom-y-out">
        <div className='flex flex-row flex-nowrap items-center text-start'>
          <Image className="md:max-w-full mr-6 rounded h-auto transform animate-float" src={iconSrc} width={100} alt="stage image" />
          <h1 className="text-3xl font-extrabold text-purple-800">{title}</h1>
        </div>
        <p className="mt-4 text-lg text-gray-500">{description}</p>
        <div className={isListVisible}>
          <ul className="mt-2 text-lg text-gray-500">
            <li className='flex flex-row flex-nowrap items-center'>
              <img className='w-5 mr-2 transition-transform ease-in-out duration-300 transform hover:scale-75' src="/fonts/icon_o.png" alt="icon_0" />
              <span>{listItem1}</span>
            </li>
            <li className='flex flex-row flex-nowrap items-center'>
              <img className='w-5 mr-2 transition-transform ease-in-out duration-300 transform hover:scale-75' src="/fonts/icon_o.png" alt="icon_0" />
              <span>{listItem2}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Service;
