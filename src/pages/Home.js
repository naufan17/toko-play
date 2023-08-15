import { React } from 'react';

import Header from '../componens/Header';
import Content from '../componens/Content';

export default function Home() {      
    return (
        <div className="bg-gradient-to-r from-indigo-100">
            <Header/> 
            <Content/>
        </div>
    );
}