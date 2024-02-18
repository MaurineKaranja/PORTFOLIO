import React from 'react';


function Footer(){

    return(
        <div className="h-20vh flex items-center justify-between px-4 bg-blue-500">
            <div>
                <h3 className="font-bold">Contact Me</h3>
                <p>Email: kmauryn14@gmail.com</p>
                <p>Phone: +254 793 922 144</p>
            </div>

            <div className="flex flex-col">
                <a>Github</a>
                <a>Linkedin</a>
                <a>Twitter</a>
            </div>
            <div className="flex flex-col">
                <a>Privacy Policy</a>
                <a>Terms of Service</a>
            </div>
        </div>
        
    )
}

export default Footer;