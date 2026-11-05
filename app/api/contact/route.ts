import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@singlestreamerp.com',
      subject: `New Expert Opinion Request from ${name} (${company || 'N/A'})`,
      text: `
        You have received a new consultation inquiry from the SingleStream ERP website:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        
        Message / Requirement:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #120826; color: #f1ecfb; border-radius: 10px;">
          <h2 style="color: #e5389a;">New Expert Opinion Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <hr style="border-color: #33224f;" />
          <h3 style="color: #10b981;">Message / Requirement:</h3>
          <p style="background: #1b0f35; padding: 15px; border-radius: 8px; color: #d9cdf5;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}