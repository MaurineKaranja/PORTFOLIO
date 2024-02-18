import React from 'react';

function Header(){

    return(
        <div className="h-70vh w-100% flex items-center justify-center px-4">
        <div className= "w-1/2 flex items-centre flex-wrap justify-centre flex-col">
            <h1 className="text-2xl font-bold"> - I'm Karanja Maurine.</h1>
            <h1 className="text-4xl font-bold text-purple-800"> Software Developer</h1>
            <p className="text-2xl">I'm a front-end developer focused on crafting clean and user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.</p>
        </div>
        <div className="w-1/2">
            <img src = "./src/assets/profile.jpg" className="w-45 h-45" alt="Profile"/>
        </div>

        </div>
     
    )
}

export default Header;