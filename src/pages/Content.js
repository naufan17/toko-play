import { React } from 'react';
import { useParams } from 'react-router-dom';

import Video from '../componens/Video';
import Product from '../componens/Product';
import Comment from '../componens/Comment';

export default function Content() {
    const {id} = useParams();

    return (
        <div className="bg-gradient-to-r from-indigo-100">       
            <Video
                id = {id}
            />
            <Product
                id = {id}
            />
            <Comment
                id = {id}
            />
        </div>
    );
}