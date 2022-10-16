import React from 'react';
import { Navbar } from "../components";
import Head from "next/head";

function About( props ) {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur cupiditate maxime quas. Adipisci aliquam corporis, est, eum impedit labore laborum nam quis ratione rerum sed veritatis, vero voluptatem voluptates!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur cupiditate maxime quas. Adipisci aliquam corporis, est, eum impedit labore laborum nam quis ratione rerum sed veritatis, vero voluptatem voluptates!</p>
        </>
    );
}

export default About;