import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);
  return NextResponse.next();
}

// Its something like a filter
export const config = {
  matcher: "/news",
};
