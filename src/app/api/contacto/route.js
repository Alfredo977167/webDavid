import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, email, mensaje } = body;
    
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: "7bb7ba2dfc8445",
        pass: "********18f0"
        }
    });

    // Define el correo que será enviado
    const mailOptions = {
      from: `"Contacto Web" <mentoladosmasuaves@gmail.com>`,
      to: process.env.DESTINATARIO,
      subject: `Nuevo mensaje de ${nombre}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
      html: `<p><strong>Nombre:</strong> ${nombre}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${mensaje}</p>`,
    };

    // Envía el correo
    const info = await transporter.sendMail(mailOptions);
    console.log("Mensaje enviado:", info.messageId);

    return NextResponse.json(
      { message: "Mensaje enviado correctamente", info },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    return NextResponse.json(
      { message: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
