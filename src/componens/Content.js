import { React, useState, useEffect } from 'react';
import axios from 'axios';

import Card from './Card';

export default function Content() {
    const [videos, setVideos] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    
    useEffect(() => {
        getAllVideo();
    });
    
    const getAllVideo = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/videos');
            setVideos(response.data.videos);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
      
    return (
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:max-w-sm md:max-w-full lg:max-w-full sm:mx-auto">
            {videos.map(video => {
                return(
                    <Card
                        id = {video._id}
                        title = {video.title}
                        thumbnail = {video.thumbnail}
                        views = {video.views}
                        url = {'content'}
                    />
                )
            })}
        </div>
    );
}