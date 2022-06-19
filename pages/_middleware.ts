import { NextResponse } from "next/server";

const protectedPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (protectedPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.SPOTIFY_CLONE_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signIn");
    }
  }
}
