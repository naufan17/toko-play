import { React, useState, useEffect } from 'react';
import axios from 'axios';

import CardVideo from './CardVideo';

export default function Content() {
    const [videos, setVideos] = useState([]);
    const [videoLoading, setVideoLoading] = useState(true);
    
    useEffect(() => {
        getAllVideo();

    }, []);
    
    const getAllVideo = async () => {
        try {
            const response = await axios.get('https://toko-play-api.glitch.me/api/videos');
            setVideos(response.data.videos);
            setVideoLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (event) => {
        const keyword = event.target.value;

        if (keyword === '') {
            getAllVideo();
        } else {
            setVideos(videos.filter((video) => video.title.toLowerCase().includes(keyword.toLowerCase())));
        }
    }
      
    return (
        <section className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:p-8 lg:p-12">
            <div className=" bg-indigo-100 rounded-2xl p-4 sm:p-8 shadow-xl">
                <div className="flex flex-row items-center w-full mb-4 sm:flex-row">
                    <input type="search" placeholder="Search Video" onChange={handleSearch} className="flex-grow sm:max-w-sm md:max-w-full sm:mx-auto lg:max-w-full sm:h-12 h-10 px-4 mb-3 sm:text-base text-md text-slate-800 placeholder:text-slate-600 bg-transparent border-2 border-slate-400 rounded-lg sm:w-full sm:mb-0 focus:border-slate-600 focus:outline-none focus:shadow-outline"/>
                </div>
                {videoLoading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full border-t-8 border-indigo-500 border-opacity-50 h-32 w-32"></div>
                    </div>
                ) : (
                    <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:max-w-sm md:max-w-full lg:max-w-full sm:mx-auto">
                        {videos.map(video => {
                            return(
                                <CardVideo
                                    id = {video._id}
                                    title = {video.title}
                                    thumbnail = {video.thumbnail}
                                    views = {video.views}
                                    url = {'content'}
                                />
                            )
                        })}
                    </div>
                )}

            </div>
        </section>
    );
}