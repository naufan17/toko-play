import React from "react";
import axios from 'axios';

export default class Product extends React.Component {
    state = {
        videos: [],
    }
    
    componentDidMount() {
        this.getAllVideo();
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }
    
    getAllVideo = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/videos', {mode:'cors'});
            this.setState({ videos: response.data.videos });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
          
    render() {
        const {videos} = this.state;
        
        return (
            <div>
            </div>
        );
    }
}