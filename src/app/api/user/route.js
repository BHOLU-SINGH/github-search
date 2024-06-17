import { NextResponse } from "next/server";

export async function GET(req, res) {
  const response = await fetch(`https://api.github.com/users/bholu-singh`);
  const data = await response.json();
  return NextResponse.json({
    data: data,
    status: response.status,
    success: "true",
  });
}
