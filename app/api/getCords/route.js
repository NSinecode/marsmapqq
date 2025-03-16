import { NextResponse } from "next/server";

export async function GET(req) {
    let data;
    fetch("https://olimp.miet.ru/ppo_it/api")
    .then(response => console.log(response.json()))
    .then(dat => data = dat)
    .catch(error => console.log(error))
    return NextResponse.json({data})
}