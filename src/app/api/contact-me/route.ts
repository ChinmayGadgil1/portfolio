import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const reqBody = await req.json();
  const { name, email, phone, message } = reqBody;

  const mailSchema = {
    from: process.env.from_MAIL,
    to: process.env.to_MAIL,
    subject: `Contact form submission by ${name}`,
    text: `${message}`,
    html: `<h1>Contact form submission from ${name} Email: ${email} Ph.No: ${phone}</h1> <hr> <p>${message}</p>`,
  };

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.from_MAIL,
      pass: process.env.PASS,
    },
  });

  try {
    await transporter.sendMail(mailSchema);

  return Response.json(
    {
      success: true,
      message: "Message Sent successfully!",
    },
    { status: 200 }
  );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        success: false,
        message: "Error sending message",
      },
      { status:400  }
    );
  }

  
}
