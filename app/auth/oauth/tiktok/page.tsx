'use client'

import { redirect } from "next/dist/server/api-utils"

const login = () => {

    //create a button with the text "Login with TikTok"
    //on click, redirect to the TikTok login page
    //after login, redirect to the app
    const CLIENT_KEY = 'awd8pbwevaxtfozp'
    const SERVER_ENDPOINT_REDIRECT = 'https://social-app-dc-7fcbe05af828.herokuapp.com/auth/oauth/tiktok/callback'
    const handleLogin = () => {
        //redirect to TikTok login page
        console.log("login with tiktok")
        const csrfState = Math.random().toString(36).substring(2);
        let url = 'https://www.tiktok.com/v2/auth/authorize/';

        // the following params need to be in `application/x-www-form-urlencoded` format.
        url += '?client_key={CLIENT_KEY}';
        url += '&scope=user.info.basic';
        url += '&response_type=code';
        url += '&redirect_uri={SERVER_ENDPOINT_REDIRECT}';
        url += '&state=' + csrfState;
        // redirect to the url mentioned above

        window.location.href = url;

    }


    return (
        <div>
            <button
                onClick={handleLogin}>

            Login with TikTok</button>
        </div>
    )
}

export default login