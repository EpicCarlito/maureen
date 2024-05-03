import { NextApiRequest, NextApiResponse } from "next";
import { AccessToken } from "@spotify/web-api-ts-sdk";
import dotenv from "dotenv";
dotenv.config();

// async function codeForRefresh() {
//   const clientId = process.env.SPOTIFY_CLIENT_ID;
//   const clientSecret = process.env.SPOTIFY_SECRET;
//   const clientCode = process.env.SPOTIFY_CODE;
//   const redirectUri = encodeURIComponent("http://localhost:3000/callback");

//   const response = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: `Basic ${Buffer.from(
//         `${clientId}:${clientSecret}`
//       ).toString("base64")}`,
//     },
//     body: `grant_type=authorization_code&code=${clientCode}&redirect_uri=${redirectUri}`,
//   });

//   const data = await response.json();
//   return data.refresh_token;
// }

export async function getAccessToken(
  id: string,
  secret: string,
  refresh: string
) {
  const basic = Buffer.from(`${id}:${secret}`).toString("base64");
  const body = `grant_type=refresh_token&refresh_token=${encodeURIComponent(
    refresh
  )}`;
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });

  const accessToken: AccessToken = await response.json();

  return accessToken;
}

async function getNowPlaying(accessToken: AccessToken) {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
      },
    }
  );

  const text = await response.text();
  if (text.trim() === "") {
    return null;
  }

  try {
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const clientId = process.env.SPOTIFY_CLIENT_ID as string;
  const secret = process.env.SPOTIFY_SECRET as string;
  const refresh = process.env.SPOTIFY_REFRESH_TOKEN as string;

  try {
    const accessToken: AccessToken = await getAccessToken(
      clientId,
      secret,
      refresh
    );

    const nowPlaying = await getNowPlaying(accessToken);
    res.status(200).json({ nowPlaying });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
}
