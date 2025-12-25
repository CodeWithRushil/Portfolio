import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, website, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px;">
    <h2 style="margin-bottom: 16px;">New Contact Message</h2>

    <table
      width="100%"
      cellpadding="10"
      cellspacing="0"
      border="1"
      style="border-collapse: collapse; border: 1px solid #000;"
    >
      <tr>
        <td style="font-weight: bold; width: 30%;">Name</td>
        <td>${name}</td>
      </tr>

      <tr>
        <td style="font-weight: bold;">Email</td>
        <td>${email}</td>
      </tr>

      <tr>
        <td style="font-weight: bold;">Website</td>
        <td>${website || "N/A"}</td>
      </tr>

      <tr>
        <td style="font-weight: bold;">Message</td>
        <td>${message}</td>
      </tr>
    </table>

    <p style="margin-top: 16px; font-size: 12px; color: #555;">
      Sent from your portfolio contact form
    </p>
  </div>
`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
