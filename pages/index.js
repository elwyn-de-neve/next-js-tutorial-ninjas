import Head from "next/head";
import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css"
import axios from "axios";
import { createClient } from "contentful";


export async function getStaticProps() {
    const client = createClient( {
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
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
                {/*<p key={ ninjas[0].sys.id } className={ styles.text }>{ ninjas[0].fields.content }</p>*/}
                <Link href="/ninjas"><a className={ styles.btn }>See Ninja Listing</a></Link>
            </div>
        </>
    )
}
