// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/create-thought", "/profile", "/update-thought"],
// };

import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  if (!verify && url.includes("/create-thought")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  if (!verify && url.includes("/update-thought")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  //   if (verify && url === "http://localhost:3000/") {
  //     return NextResponse.redirect("http://localhost:3000/profile");
  //   }
}
