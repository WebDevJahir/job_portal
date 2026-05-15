import dotenv from 'dotenv'

dotenv.config();

const BREVO_API_KEY = process.env.BREVO_API_KEY?.trim();
const SENDER_EMAIL = process.env.EMAIL_USER

const sendEmail = async ({to, subject, htmlContent}) => {
    try{
        if(!BREVO_API_KEY || !SENDER_EMAIL){
            throw new Error("Email configuration missing (BREVO API KEY or EMAIL KEY");
        }

        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "api-key": BREVO_API_KEY,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                sender: {name: "JobPortal", email: SENDER_EMAIL},
                to,
                subject,
                htmlContent
            }), 
        });

        const result = await response.json();
        if(!response.ok) throw new Error(result.message || "Brevo API Error");
        return result;
    }catch(error){
        console.error(`Email Error [${subject}]:`, error.message)
        throw error;
    }
}

const otpTemplate = (title, name, otp, message) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; text-align: center;">
        <h2 style="color: #4f46e5;">${title}</h2>
        <p>Hi ${name},</p>
        <p>${message}</p>
        <div style="margin: 30px 0;">
            <span style="font-size: 32px; font-weight: bold; color: #4f46e5; letter-spacing: 5px; background: #f3f4f6; padding: 10px 20px; border-radius: 8px;">${otp}</span>
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you did not request this, please ignore this email.</p>
        <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;">
        <p style="font-size: 12px; color: #888888;">&copy; 2026 JobPortal. All rights reserved.</p>
    </div>
`;


    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
            <p>You have received a new inquiry from the JobPortal contact form.</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                ${['fullName', 'email', 'phone', 'subject', 'message'].map(key => `
                    <tr>
                        <td style="padding: 10px; border: 1px solid #eeeeee; background: #f9f9f9; width: 30%;"><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong></td>
                        <td style="padding: 10px; border: 1px solid #eeeeee;">${data[key] || 'N/A'}</td>
                    </tr>
                `).join('')}
            </table>
            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;">
            <p style="font-size: 12px; color: #888888; text-align: center;">This is an automated notification from JobPortal.</p>
        </div>
    `;