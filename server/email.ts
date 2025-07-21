import nodemailer from 'nodemailer';

// Email configuration for GoDaddy SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtpout.secureserver.net', // GoDaddy SMTP server
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your GoDaddy email address
      pass: process.env.SMTP_PASS, // Your email password or app password
    },
  });
};

interface LeadData {
  name: string;
  email: string;
  businessName?: string;
  phone?: string;
  message?: string;
  source?: string;
}

export async function sendLeadNotification(leadData: LeadData) {
  const transporter = createTransporter();
  
  try {
    // Email to business owner (you)
    const ownerEmailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject: `🚀 New Lead: ${leadData.name} - Free Audit Request`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #14b8a6, #0d9488); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Alert! 🎯</h1>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1f2937; margin-top: 0;">Lead Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${leadData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="mailto:${leadData.email}" style="color: #14b8a6;">${leadData.email}</a>
                </td>
              </tr>
              ${leadData.businessName ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Business:</td>
                <td style="padding: 8px 0; color: #1f2937;">${leadData.businessName}</td>
              </tr>
              ` : ''}
              ${leadData.phone ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="tel:${leadData.phone}" style="color: #14b8a6;">${leadData.phone}</a>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Source:</td>
                <td style="padding: 8px 0; color: #1f2937;">${leadData.source || 'Website Form'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Time:</td>
                <td style="padding: 8px 0; color: #1f2937;">${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}</td>
              </tr>
            </table>
            
            ${leadData.message ? `
            <div style="margin-top: 20px;">
              <h3 style="color: #1f2937;">Message:</h3>
              <div style="background: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #14b8a6;">
                ${leadData.message}
              </div>
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 20px; background: #f0fdfa; border-radius: 6px; border: 1px solid #14b8a6;">
              <h3 style="color: #0d9488; margin-top: 0;">Quick Actions:</h3>
              <p style="margin: 10px 0;">
                <a href="mailto:${leadData.email}?subject=Re: Your Free Bookkeeping Audit Request&body=Hi ${leadData.name},%0D%0A%0D%0AThank you for requesting a free bookkeeping audit! I'd love to schedule a time to discuss your business needs.%0D%0A%0D%0ABest regards,%0D%0ABreeze Financials Team" 
                   style="background: #14b8a6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 5px 10px 5px 0;">
                  📧 Reply to Lead
                </a>
                <a href="https://calendly.com/rodrigomedeiros-breezefinancials/30min?month=2025-07" 
                   style="background: #0d9488; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 5px 0;">
                  📅 Book Meeting
                </a>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-response email to the lead
    const leadEmailOptions = {
      from: process.env.SMTP_USER,
      to: leadData.email,
      subject: 'Thank You for Requesting Your Free Bookkeeping Audit!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #14b8a6, #0d9488); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${leadData.name}! 🎉</h1>
            <p style="color: #a7f3d0; margin: 10px 0 0; font-size: 18px;">Your free audit request has been received</p>
          </div>
          
          <div style="background: white; padding: 40px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1f2937; margin-top: 0;">What Happens Next?</h2>
            
            <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; border-left: 4px solid #14b8a6; margin: 20px 0;">
              <h3 style="color: #0d9488; margin-top: 0;">📋 Your Free Bookkeeping Audit Includes:</h3>
              <ul style="color: #1f2937; line-height: 1.6;">
                <li>Complete review of your current bookkeeping setup</li>
                <li>Identification of potential cost savings and efficiency improvements</li>
                <li>Personalized recommendations for your business</li>
                <li>Clear next steps to optimize your financial operations</li>
              </ul>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <h3 style="color: #d97706; margin-top: 0;">⏰ Timeline:</h3>
              <p style="color: #1f2937; margin: 0; line-height: 1.6;">
                <strong>Within 24 hours:</strong> We'll contact you to schedule your audit<br>
                <strong>Within 2-3 business days:</strong> Complete audit delivered with actionable insights
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://calendly.com/rodrigomedeiros-breezefinancials/30min?month=2025-07" 
                 style="background: #14b8a6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; font-size: 16px;">
                📅 Or Book Your Call Now
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                Questions? Reply to this email or call us directly.<br>
                <strong>Breeze Financials</strong> • Toronto & GTA<br>
                <a href="mailto:rodrigomedeiros@breezefinancials.com" style="color: #14b8a6;">rodrigomedeiros@breezefinancials.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerEmailOptions);
    await transporter.sendMail(leadEmailOptions);
    
    console.log('✅ Lead notification emails sent successfully');
    return { success: true };
    
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error: error.message };
  }
}