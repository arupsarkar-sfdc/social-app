'use client'

const login = () => {

    //create a button with the text "Login with TikTok"
    //on click, redirect to the TikTok login page
    //after login, redirect to the app

    const handleLogin = () => {
        console.log("login with tiktok-client_id - Start");
        console.log("login with tiktok-key", process.env.CLIENT_KEY);
        console.log("login with tiktok-SERVER_ENDPOINT_REDIRECT", process.env.SERVER_ENDPOINT_REDIRECT);
        //redirect to TikTok login page
        console.log("login with tiktok")
        const csrfState = Math.random().toString(36).substring(2);
        let url = 'https://www.tiktok.com/v2/auth/authorize/';

        // the following params need to be in `application/x-www-form-urlencoded` format.
        url += `?client_key=${process.env.CLIENT_KEY}`;
        url += '&scope=user.info.basic';
        url += '&response_type=code';
        url += `&redirect_uri=${process.env.SERVER_ENDPOINT_REDIRECT}`;
        url += '&state=' + csrfState;
        // redirect to the url mentioned above
        console.log(url);
        console.log("login with tiktok-client_id - Start");

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