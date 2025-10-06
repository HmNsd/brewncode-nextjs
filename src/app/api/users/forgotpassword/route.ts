import { connectDB } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailValidation";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email } = reqBody;
    if (!email) {
      return NextResponse.json(
        { error: "Please fill all the fields" },
        { status: 400 }
      );
    }

    //check if user already exists
        const userExists = await User.findOne({ email });
        if (!userExists) {
          return NextResponse.json(
            { error: "User not exists" },
            { status: 400 }
          );
        }

        //send reset password email
    await sendEmail({
      email,
      emailType: "RESET",
      userId: userExists._id,
    });
    
    return NextResponse.json(
      {
        message: "reset password mail sent successfully",
        success: true,
      },
      { status: 201 }
    );

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function PATCH(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, newPassword } = reqBody;
    // console.log(`Token: ${token}, New Password: ${newPassword} `);
    
    if (!token || !newPassword) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });
    // console.log("User found:", user);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid/User not found" },
        { status: 400 }
      );
    }

    //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;

    await user.save();
    return NextResponse.json(
      { message: "Password reset successfully" },
      { status: 200 }
    );
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
    
  }
}