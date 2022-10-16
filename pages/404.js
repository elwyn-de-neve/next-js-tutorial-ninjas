import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function NotFound( props ) {
    const router = useRouter();

    useEffect( () => {
        setTimeout(()=> {
            router.push( "/" )
        }, 3000 )
    }, [] )

    return (
        <>
            <Head>
                <title>Ninja List | 404</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div className="not-found">
                <h1>Oops...</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to the <Link href="/">homepage</Link></p>
            </div>
        </>
    );
}

export default NotFound;