import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.VITE_MAIL_USER,
    pass: process.env.VITE_MAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, projectDetails } = req.body;

  if (!name || !email || !projectDetails) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const mailOptions = {
    from: process.env.VITE_MAIL_USER,
    to: 'joshwav36@gmail.com',
    subject: `New Project Request from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Project Details: ${projectDetails}
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
});

// For local testing
if (process.env.NODE_ENV !== 'production' && import.meta.url === `file://${process.argv[1]}`) {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
