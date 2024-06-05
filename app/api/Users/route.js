import { NextResponse } from "next/server";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt"

export async function POST(req) {
    try {
        const body = await req.json();
        const userData = body.formData;

        if (!userData?.email || userData?.password) {
            return NextResponse({ message: "All fields are required" }, { status: 400 })
        }

        const duplicate = await User.findOne({ email: userData.email }).lean();

        console.log("==============> ----")
        console.log("Duplicate email: ", dupliate);
        console.log("==============> ----")

        if (duplicate) {
            return NextResponse.json({ message: "Duplicate Email" }, { status: 409 })
        }

        const hashPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashPassword;

        await User.create(userData)
        return NextResponse({ message: "User created" }, { status: 201 })

    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}