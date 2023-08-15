import { React } from 'react';
import { formatDistanceToNow, addHours, parseISO } from 'date-fns';

import image from '../assets/image/anonymous.jpg'

export default function Comment({username, comment, created_at}) {
    return (
        <div className="flex">
            <div className="mr-4">
                <img src={image} className="flex items-center justify-center w-10 h-10 mb-3 rounded-full" alt=''/>
            </div>
            <div>
                <h6 className="mb-2 font-semibold text-gray-900 leading-5">
                    {username}<span className="font-normal text-gray-900 text-sm"> - {formatDistanceToNow(addHours(parseISO(created_at), -7))}</span>
                </h6>
                <p className="text-sm text-gray-900">
                    {comment}
                </p>
                <hr className="w-full my-6 border border-slate-400" />
            </div>
        </div>

    );
}