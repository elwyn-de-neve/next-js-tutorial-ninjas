import React from 'react';
import { Navbar, Footer } from "./index";

function Layout( { children } ) {
    return (
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;