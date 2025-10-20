import { signToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  if (email != "abc@gmail.com" && password != "abc123456") {
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 401 });
  }

  const token = await signToken({ email, role: "user" });
  const res = NextResponse.json({ message: "Login successful" });

  res.cookies.set("token", token, {
    httponly: true,
    maxage: 60 * 60,
    path: "/",
  });

  return res;
}
