import React from 'react';
function Navbar(){

    return(
        <div className ="h-10vh flex items-center justify-between px-4 bg-gray-200 text-2xl shadow-2xl">
            <img src="./src/assets/logo.jpg" className="w-20 h-auto mr-4" alt="Logo" />
            <a> Projects</a>
            <a> Skills</a>
            <a> Resume </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md"> Contact </button>
        </div>
    )
}

export default Navbar;