import { React, useState, useEffect } from 'react';
import axios from 'axios';

export default function Video({id}) {
    const [videos, setVideos] = useState([]);
    const [videoLoading, setVideoLoading] = useState(true);

    
    useEffect(() => {
        getOneVideo();

    }, []);
    
    const getOneVideo = async () => {
        try {
            const response = await axios.get(`https://toko-play-api.glitch.me/api/videos/${id}`);
            setVideos(response.data);
            setVideoLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <section className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:p-8 lg:p-12">  
            <div className=" bg-indigo-100 rounded-2xl p-4 sm:p-8 shadow-xl">
                {videoLoading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full border-t-8 border-indigo-500 border-opacity-50 h-32 w-32"></div>
                    </div>
                 ) : ( 
                    <div>
                        <div className="relative w-full">
                            <iframe className="object-cover w-full rounded shadow-lg h-64 md:h-96 lg:h-128" src={videos.url_video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="max-w-xl mt-4 md:mx-auto sm:text-center lg:max-w-2xl md:mt-6">
                            <h2 className="max-w-lg font-sans text-xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto">
                                {videos.title}
                            </h2>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}