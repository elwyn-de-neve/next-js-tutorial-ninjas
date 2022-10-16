import Head from "next/head";
import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css"
import axios from "axios";
import { createClient } from "contentful";


export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    })

    const response = await client.getEntries({ content_type: 'ninjas' })

    return {
        props: { ninjas: response }
    }
}

export default function Home({ ninjas }) {
    console.log(ninjas)
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div>
                <h1 className={ styles.title }>Homepage</h1>
                <p className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur
                    cupiditate maxime quas. Adipisci
                    aliquam corporis, est, eum impedit labore laborum nam quis ratione rerum sed veritatis, vero
                    voluptatem
                    voluptates!</p>
                <p className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur
                    cupiditate maxime quas. Adipisci
                    aliquam corporis, est, eum impedit labore laborum nam quis ratione rerum sed veritatis, vero
                    voluptatem
                    voluptates!</p>
                <Link href="/ninjas"><a className={ styles.btn }>See Ninja Listing</a></Link>
            </div>
        </>
    )
}
