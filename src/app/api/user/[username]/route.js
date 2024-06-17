import { NextResponse } from "next/server";

export async function GET(req, res) {
  const username = res.params.username;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return NextResponse.json({
    data: data,
    status: response.status,
    success: "true",
  });
}
