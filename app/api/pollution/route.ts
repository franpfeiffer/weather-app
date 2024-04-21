// import axios from "axios";
// import { NextRequest, NextResponse } from "next/server";

// // Define a custom interface that extends NextRequest
// interface CustomNextRequest extends NextRequest {
//   query: {
//     lat: string;
//     lon: string;
//     // Add any other query parameters you expect here
//   };
// }

// export async function GET(req: CustomNextRequest) {
//   try {
//     const { lat, lon } = req.query;

//     const apiKey = process.env.OPENWEATHERMAP_API_KEY;

//     const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

//     const res = await axios.get(url);

//     return NextResponse.json(res.data);
//   } catch (error) {
//     console.log("Error in getting pollution data: ", error);
//     console.log("Error in getting pollusion data ", error);
//     return new Response("Error fetching pollution data", { status: 500 });
//   }
// }
