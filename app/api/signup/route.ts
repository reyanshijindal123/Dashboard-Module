// app/api/signup/route.ts

import { NextRequest, NextResponse } from "next/server";
import { User } from "../types/user";

export async function POST(
  request: NextRequest
) {
  const body = await request.json();

  const user: User = {
    name: body.name,
    email: body.email,
    password: body.password,
    age: body.age
  };

  return NextResponse.json({
    success: true,
    message: "User created",
  });
}