import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FeedbackRequestBody {
  name: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const { name, message }: FeedbackRequestBody = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Feedback de ${name}`,
    text: `Nome: ${name}\n\nMensagem:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "E-mail enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Erro ao enviar o e-mail" },
      { status: 500 }
    );
  }
}
