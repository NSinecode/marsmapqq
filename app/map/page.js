"use client";

import { useState, useEffect } from "react";
import axios from 'axios';

async function fetchData() {
    return await fetch('https://olimp.miet.ru/ppo_it/api', {
            method: 'GET',
            mode: 'no-cors'
        })
        .then(resp => {
            if (!resp.ok) {
                throw `Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`;
            }
            return resp.json();
        })
        .then(receivedJson => {
            console.log(receivedJson);
        })
        .catch(err => {
            console.debug("Error in fetch", err);
        });
} 


export default function Map() {
    const [url, setUrl] = useState();
    const [arr, setArr] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const res = fetch("/api/getCords", {
            method: 'GET',
            headers: {
                "Content-Type" : "application/json",
            }
        })
        .catch(error => console.log(error));
        console.log(res);
    }, [])
    useEffect(() => { 
        const params = new URLSearchParams(window.location.search)
        const ur = params.get("url");
        setUrl(ur);
    }, []);

    return (
        <div>
            <h1>{url}</h1>
        </div>
    )
}