import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcrypts from "bcryptjs"

connect()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { name, email, password } = reqBody
        console.log({ reqBody });

        // check user find
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({
                error: "user already exist",
                status: 400

            })
        }
 
        //hash password
        const salt=  bcrypts.getSalt(10)
        const hashPassword=await bcrypts.hash(password,salt)
        const newUser=new User({
            name,password:hashPassword,email
        })
        const savedUser=await newUser.save()
        console.log({savedUser});
        return NextResponse.json({
            message:"User saved successfully",
            success:true,
            savedUser
        })

    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status: 500

        })

    }

}