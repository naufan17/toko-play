import { React, useState, useEffect } from 'react';
import axios from 'axios';

export default function Comment({id}) {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        getAllComments();

    }, []);
    
    const getAllComments = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/comments/${id}`);
            setComments(response.data.comments);
            console.log(response.data.comments);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-screen-lg gap-8 sm:mx-auto">
                <div className="flex flex-col justify-center">
                    {comments.map((comment) => {
                        return(
                            <div className="flex">
                                <div className="mr-4">
                                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                                        <svg className="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-2 font-semibold leading-5">
                                        {comment.username}
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        {comment.comment}
                                    </p>
                                    <hr className="w-full my-6 border-gray-300" />
                                </div>
                            </div>    
                        )
                    })}
                </div>
            </div>
        </div> 
    );
}