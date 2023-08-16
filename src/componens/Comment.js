import { React, useState, useEffect } from 'react';
import axios from 'axios';

import ListComment from './ListComment'

export default function Comment({id}) {
    const [comments, setComments] = useState([]);
    const [commentLoading, setCommentLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isCommentValid, setIsCommentValid] = useState(true);
    const [success, setSuccess] = useState('');
    
    useEffect(() => {
        getAllComments();

    }, []);
    
    const getAllComments = async () => {
        try {
            const response = await axios.get(`https://toko-play-api.glitch.me/api/comments/${id}`);
            setComments(response.data.comments);
            setCommentLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setIsUsernameValid(true);
    };
    
    const handleCommentChange = (event) => {
        setComment(event.target.value);
        setIsCommentValid(true);
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

            const response = await axios.post('https://toko-play-api.glitch.me/api/comments', 
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
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };

    return (
        <section className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:p-8 lg:p-12">  
            <div className=" bg-indigo-100 rounded-2xl p-4 sm:p-8 shadow-xl">
                <div className="max-w-screen-lg sm:mx-auto">
                    <div className="flex flex-col">
                        <div className="flex-initial">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username" className="font-medium text-gray-900">
                                    Username
                                </label>
                                {!isUsernameValid && (
                                    <p className="text-red-500">Username is required*</p>
                                )}
                                <input type="text" id="username" value={username} onChange={handleUsernameChange} placeholder="Username" className="w-full px-4 py-2 mt-2 mb-2 bg-transparent border-2 border-slate-400 rounded-lg focus:border-slate-600 focus:outline-none focus:shadow-outline"/>
                                <label htmlFor="comment" className="font-medium text-gray-900">
                                    Comment
                                </label>
                                {!isCommentValid && (
                                    <p className="text-red-500">Comment is required*</p>
                                )}
                                <textarea id="comment" value={comment} onChange={handleCommentChange} placeholder="Comment" className="w-full h-24 px-4 py-2 mt-2 bg-transparent border-2 border-slate-400 rounded-lg focus:border-slate-600 focus:outline-none focus:shadow-outline"></textarea>
                                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 mt-2 mb-4 float-right text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
                                    Comment
                                </button>
                                <hr className="w-full my-6 border border-slate-400" />
                            </form>
                        </div>    
                        {commentLoading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full border-t-8 border-indigo-500 border-opacity-50 h-32 w-32"></div>
                            </div>
                        ) : (
                            <div>
                                {comments.map((comment) => {
                                    return(
                                        <ListComment
                                        username = {comment.username}
                                        comment = {comment.comment}
                                        created_at = {comment.created_at}
                                        />
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}