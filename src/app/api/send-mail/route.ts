import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const data = await req.json();

    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.MAIL_USER as string,
            pass: process.env.MAIL_PASSWORD as string,
        },
    });

    const mailOptions = {
        from: {
            name: name,
            address: email
        },
        to: process.env.MY_EMAIL as string,
        subject: `Hello from ${name} ${email}`,
        text: message,
    }

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "email sent" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}
