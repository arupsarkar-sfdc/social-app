'use client'
import { useEffect } from "react"


export default function Home() {
//callback handlers

    useEffect(() => {
        //get the code from the url
        const url = window.location.href;
        const hasCode = url.includes("?code=");
        //if code exists, split at = to get code
        if (hasCode) {
            const newUrl = url.split("?code=");
            window.history.pushState({}, newUrl[0]);
            //get the code after the = sign
            const code = newUrl[1];
            console.log(code);
        }
    }
    , [])

    return (
        <div>
            <h1>Callback</h1>
        </div>
    )
}