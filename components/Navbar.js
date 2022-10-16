import React from 'react';
import Link from "next/link"
import Image from "next/image";

function Navbar( props ) {
    return (
        <nav>
            <span className="logo">
                {/*<h1>Ninja List</h1>*/ }
                <Image src="/logo.png" alt="Logo" width={128} height={77}/>
            </span>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/ninjas">Ninja Listing</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;