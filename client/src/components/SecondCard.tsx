import { Link } from "react-router-dom";
import React from "react";

export const SecondCard = ({
  item,
  children,
  link,
  images,
}: {
  item: { id: string | number; name: string; src?: string; owner?: string };
  images: string[];
  link: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      key={item.id}
      to={link}
      className={`bg-[#fffef0] relative rounded-lg overflow-hidden group cursor-pointer h-96 shadow-xl transition-all duration-500 ease`}
    >
      <div className="relative overflow-hidden h-full" style={{}}>
        <img
          src={images[0]}
          alt={`${item.name} ship`}
          className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300 ease-out opacity-100 group-hover:opacity-0"
        />
        <img
          src={images[1]}
          alt={`${item.name} ship`}
          className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-2 items-start font-bold text-white opacity-100 transition-all duration-300 ease-out group-hover:opacity-0">
          <h2 className="text-3xl">{item.name}</h2>
          <p>{item.owner}</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out p-4">
        {children}
      </div>
    </Link>
  );
};
