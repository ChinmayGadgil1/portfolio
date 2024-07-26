import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log("entered");
  const reqBody = await req.json();
  const { name, email, phone, message } = reqBody;

  const mailSchema = {
    from: process.env.MAIL,
    to: process.env.MAIL,
    subject: `Contact form submission by ${name}`,
    text: `${message}`,
    html: `<h1>Contact form submission from ${name} Email: ${email} Ph.No: ${phone}</h1> <hr> <p>${message}</p>`,
  };

  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
  });

  await transporter.sendMail(mailSchema);

  return Response.json(
    {
      success: true,
      message: "Message Sent successfully!",
    },
    { status: 200 }
  );
}
