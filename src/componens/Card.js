import React from "react";

export default function Card({id, title, thumbnail, views, url}) {
  const link = `${url}/${id}`;

  return (
    <div className="overflow-hidden bg-transparent p-4 rounded-lg shadow-sm border-2 border-indigo-200 hover:border-slate-400 hover:outline-none hover:shadow-outline">
      <a href={link} aria-label="Article">
        <img src={thumbnail} className="object-cover mb-3 w-full h-64 rounded-lg" alt=""/>
        <div className="inline-block mb-3 text-black">
          <p className="text-md font-semibold leading-tight">{title}</p>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-start text-gray-800">
            <p className="text-sm font-semibold"> Views: {views}</p>
          </div>
        </div>
      </a>
    </div>
  );
};