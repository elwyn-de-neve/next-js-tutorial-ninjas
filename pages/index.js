import Head from "next/head";
import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css"
import axios from "axios";
import { createClient } from "contentful";


export async function getStaticProps() {
    const client = createClient( {
        // space: process.env.CONTENTFUL_SPACE_ID,
        // accessToken: process.env.CONTENTFUL_ACCESS_KEY
        space: 'b34x3vlpckl6',
        accessToken: 'h0ak6nsKoU7vVG-OnnXXT2GwVb2fslUNzW2t-ZrcV3U'
    } )

    const response = await client.getEntries( { content_type: 'ninjas' } )

    return {
        props: { ninjas: response.items }
    }
}

export default function Home( { ninjas } ) {
    console.log( ninjas )
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div>
                <h1 key={ ninjas[0].sys.id } className={ styles.title }>{ ninjas[0].fields.title }</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur consequatur dolorum ducimus facere impedit itaque labore laboriosam maxime mollitia nihil nisi nostrum ratione repellat, reprehenderit saepe tempora, tempore velit!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet beatae, delectus dolore eum labore neque nesciunt quaerat suscipit temporibus!</p>
                <Link href="/ninjas"><a className={ styles.btn }>See Ninja Listing</a></Link>
            </div>
        </>
    )
}
