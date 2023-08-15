import React from "react";

export default function Card({id, title, thumbnail, views, url}) {
  const link = `${url}/${id}`;

  return (
    <a href={link} aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl opacity-100 hover:opacity-90">
        <img className="object-cover w-full h-56 md:h-64 lg:h-80" src={thumbnail} alt=""/>
        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gradient-to-t from-slate-800 opacity-90 hover:opacity-100">
          <p className="text-lg font-semibold text-gray-100">{title}</p>
        </div>
      </div>
    </a>
  );
};