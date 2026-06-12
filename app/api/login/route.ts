import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import { User } from "../types/user";

export const users: User[] = [];

export async function POST(
    request : NextRequest
) {
    const {email,password}=
    await request.json();

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 401 }
        );
    }

    const cookieStore = await cookies();
    cookieStore.set("token", user.email, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
        path: "/",
    });

    return NextResponse.json({ message: "Login successful" });
}