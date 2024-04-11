import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./actions/session";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/admin/login") {
    const user = await getSession();
    if (user) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/admin") {
    const user = await getSession();
    if (!user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
