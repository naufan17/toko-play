import { React, useState, useEffect } from 'react';
import { formatDistanceToNow, addHours, parseISO } from 'date-fns';
import axios from 'axios';

import image from '../assets/image/anonymous.jpg'

export default function Comment({id}) {
    const [comments, setComments] = useState([]);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isCommentValid, setIsCommentValid] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
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

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!username) {
          setIsUsernameValid(false);
          return;
        }
        if (!comment) {
          setIsCommentValid(false);
          return;
        }
    
        setIsUsernameValid(true);
        setIsCommentValid(true);
            
        try {
            const formData = new URLSearchParams();
            formData.append('video_id', id);
            formData.append('username', username);
            formData.append('comment', comment);

            const response = await axios.post('http://localhost:8000/api/comments', 
                formData.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            setSuccess(response.data.message);
            getAllComments();
            setUsername('');
            setComment('');
            setError('');
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
      };

    return (
        <section className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:p-8 lg:p-12">  
            <div className=" bg-indigo-100 rounded-2xl p-4 sm:p-8 shadow-xl">
                <div className="max-w-screen-lg ">
                    <div className="flex flex-col w-full">
                        <div className="flex">
                            <div className="mr-4">
                                <img src={image} className="flex items-center justify-center w-10 h-10 mb-3 rounded-full" alt=''/>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username" className="font-medium text-gray-900">
                                    Username
                                </label>
                                <input type="text" id="username" value={username} onChange={handleUsernameChange} placeholder="Username" className="w-full px-4 py-2 mt-2 mb-2 bg-transparent border-2 border-slate-400 rounded-lg focus:border-slate-600 focus:outline-none focus:shadow-outline"/>
                                <label htmlFor="comment" className="font-medium text-gray-900">
                                    Comment
                                </label>
                                <textarea id="comment" value={comment} onChange={handleCommentChange} placeholder="Comment" className="w-full h-24 px-4 py-2 mt-2 bg-transparent border-2 border-slate-400 rounded-lg focus:border-slate-600 focus:outline-none focus:shadow-outline"></textarea>
                                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 mt-2 mb-4 float-right text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
                                    Comment
                                </button>
                                <hr className="w-full my-6 border border-slate-400" />
                            </form>
                        </div>    
                        {comments.map((comment) => {
                            return(
                                <div className="flex">
                                    <div className="mr-4">
                                        <img src={image} className="flex items-center justify-center w-10 h-10 mb-3 rounded-full" alt=''/>
                                    </div>
                                    <div>
                                        <h6 className="mb-2 font-semibold text-gray-900 leading-5">
                                            {comment.username}<span className="font-normal text-gray-900 text-sm"> - {formatDistanceToNow(addHours(parseISO(comment.created_at), -7))}</span>
                                        </h6>
                                        <p className="text-sm text-gray-900">
                                            {comment.comment}
                                        </p>
                                        <hr className="w-full my-6 border border-slate-400" />
                                    </div>
                                </div>    
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}