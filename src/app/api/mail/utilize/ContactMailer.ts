import nodemailer from "nodemailer";

// Type for the user info object
interface UserInfo {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Capitalize each part of the name
const capitalizeName = (name: string): string => {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
};

// Construct HTML for the email
const createEmailHTML = ({ name, email, subject, message }: UserInfo): string => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #4A90E2;">New Contact Message</h2>
      <p><strong>From:</strong> ${capitalizeName(name)} &lt;${email}&gt;</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr style="border: none; border-top: 1px solid #eee;" />
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr style="border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 0.9em; color: #888;">This message was sent via your portfolio/contact form.</p>
    </div>
  `;
};

// Main function to send the email
const handleMailSent = async (userInfo: UserInfo): Promise<nodemailer.SentMessageInfo> => {
  const { name, email, subject, message } = userInfo;

  if (!name || !email || !subject || !message) {
    throw new Error("Missing required fields");
  }

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL as string,
    to: process.env.NODEMAILER_EMAIL as string, // change as needed
    subject: subject,
    html: createEmailHTML({ name, email, subject, message }),
  };

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL as string,
        pass: process.env.NODEMAILER_PASSWORD as string,
      },
    });

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default handleMailSent;
