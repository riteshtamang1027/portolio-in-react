import nodemiler from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    // check user fill or not
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    // email transport
    const transport = nodemiler.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD,
      },
    });

    // email content

    const mailOption = {
      from: email,
      to: process.env.MY_EMAIL,
      subject: `New contact message from ${name}`,
      html: `
     <h3>Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    
    `,
    };

    // send email

    await transport.sendMail(mailOption);
    return res.status(200).json({ message: "Message sent successfully!",
      
     });
  } catch (error) { 
    console.log(error);
    return res.status(500).json({
      message: "Internal server error.",
      error,
    });
  }
};
