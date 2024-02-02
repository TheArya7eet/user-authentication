import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Establish a connection to the database
connect();

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body of the request
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    // Check if user already exists in the database
    const user = await User.findOne({ email });

    // If user does not exist
    if (!user) {
      return NextResponse.json(
        { error: "User doesn't exist." },
        { status: 400 }
      );
    }

    // If the password is correct
    const validPassword = await bcryptjs.compare(password, user.password);

    // Check if the password is incorrect
    if (!validPassword) {
      return NextResponse.json(
        { error: "Incorrect password!" },
        { status: 400 }
      );
      console.log("Incorrect password!");
    }

    // Create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // Create token data
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful!",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
