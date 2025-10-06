import nodemailer from "nodemailer";
import User from "@/models/userModel";

// Use crypto for secure random token generation
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const crypto = await import("crypto");
    const hashedToken = crypto.randomBytes(32).toString("hex");

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
      console.log(emailType);
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
      console.log(emailType);
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.userMailtrap,
        pass: process.env.passwordMailtrap,
      },
    });

    // Use query string format for URLs to match your frontend routes
    const page =
      emailType === "VERIFY" ? "verifyemail" : "forgotpassword";
    const subject =
      emailType === "VERIFY" ? "Verify your email" : "Reset your password";

    const html = `<p>Click <a href="${process.env.domain}/${page}?token=${hashedToken}">here</a> to ${
      emailType === "VERIFY" ? "verify your email" : "reset your password"
    }.<br>If the "here" link does not work, copy and paste this URL into your browser:<br>
    ${process.env.domain}/${page}?token=${hashedToken}</p>`;

    const mailOptions = {
      from: "bnc@gmail.com",
      to: email,
      subject,
      html,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
