import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="overflow-hidden bg-transparent p-4 rounded-lg shadow-sm border-2 border-indigo-200 hover:border-slate-400 hover:outline-none hover:shadow-outline">
        <a href="/" aria-label="Article">
          <img src={this.props.thumbnail} className="object-cover mb-3 w-full h-64 rounded-lg" alt=""/>
          <div className="inline-block mb-3 text-black">
            <p className="text-md font-semibold leading-tight">{this.props.title}</p>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-start text-gray-800">
              <p className="text-sm font-semibold"> Views: {this.props.views}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
};