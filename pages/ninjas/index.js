import React from 'react';
import Head from "next/head";
import axios from "axios";
import styles from "../../styles/Ninjas.module.css"
import Link from "next/link";

const URI = "https://jsonplaceholder.typicode.com"
const endpoint = "/users"

export async function getStaticProps() {
    const response = await axios.get( URI + endpoint )
    return {
        props: { ninjas: response.data }
    }
}

function Ninjas( { ninjas } ) {
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <h1>All Ninjas</h1>
            { ninjas.map( ninja => (
                <Link key={ ninja.id } href={ "/ninjas/" + ninja.id }>
                    <a className={styles.single }>
                        <h3>{ ninja.name }</h3>
                    </a>
                </Link>
            ) ) }
        </>
    );
}

export default Ninjas;