import React from 'react';
import Heading from './Heading';
import HomeContent from './HomeContent';
import Layout from './Layout';

function Home(){
    return <Layout>
                <Heading title="Home"/>
                <HomeContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique vestibulum neque, 
                    eu interdum orci tempus ut. Suspendisse neque arcu, tincidunt quis venenatis non, elementum quis tellus. 
                    Cras molestie diam ac est tincidunt hendrerit. Mauris in justo enim. 
                    Phasellus facilisis laoreet ante, vel ornare ligula ultricies eu. </HomeContent>
    </Layout>
}

export default Home;