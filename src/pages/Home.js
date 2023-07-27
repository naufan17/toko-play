import React from "react";
import axios from 'axios';

import Card from '../componens/Card';

export default class Home extends React.Component {
    state = {
        videos: [],
        searchQuery: '',
        filteredData: [],
    }
    
    componentDidMount() {
        this.getAllVideo();
    }
    
    getAllVideo = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/videos', {mode:'cors'});
            this.setState({ videos: response.data.videos });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    handleSearch = (event) => {
        this.setState({ searchQuery: event.target.value })
    };    
          
    render() {
        const { videos, searchQuery } = this.state;

        const searchVideos = videos.filter((video) => video.title.toLowerCase().includes(searchQuery.toLowerCase()));
        
        return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Toko Play
                    </h2>
                    <p className="text-sm text-gray-700 sm:text-lg">
                        Video Produk Review
                    </p>
                </div>
                <div className="flex flex-cow items-center w-full mb-4 sm:flex-row">
                    <input type="search" value={ searchQuery } onChange={ this.handleSearch } placeholder="Search Video" className="flex-grow sm:max-w-sm md:max-w-full sm:mx-auto lg:max-w-full sm:h-12 h-10 px-4 mb-3 sm:text-base text-md text-gray-900  bg-transparent border-2 border-indigo-200 rounded appearance-none sm:w-full sm:mb-0 focus:border-slate-400 focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:max-w-sm md:max-w-full lg:max-w-full sm:mx-auto">
                    {searchVideos.map(video => 
                        <Card
                        title={video.title}
                        thumbnail={video.thumbnail}
                        views={video.views}
                        />
                    )}
                </div>
            </div> 
        );
    }
}