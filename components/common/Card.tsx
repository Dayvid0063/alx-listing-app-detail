import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';
import { PLACEHOLDER_IMAGES } from '../../constants';

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  image,
  location,
  rating,
  onClick,
}) => {
  const [imgSrc, setImgSrc] = React.useState(image);

  const handleImageError = () => {
    setImgSrc(PLACEHOLDER_IMAGES.DEFAULT);
  };

  return (
    <div 
      onClick={onClick}
      className="rounded-xl overflow-hidden shadow-lg bg-white hover:opacity-90 transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
          onError={handleImageError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg text-gray-500 font-semibold">{title}</h3>
          {rating && (
            <div className="flex items-center text-gray-500">
              <span className="text-sm">⭐ {rating}</span>
            </div>
          )}
        </div>
        <p className="text-gray-500 text-sm mb-2">{location}</p>
        <p className="text-gray-700 text-sm mb-3">{description}</p>
        <p className="font-semibold text-gray-500">${price} <span className="text-sm font-normal">/night</span></p>
      </div>
    </div>
  );
};

export default Card;
