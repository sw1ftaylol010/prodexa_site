import { NextResponse } from 'next/server';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  product?: string;
  message: string;
}

interface IpInfo {
  ip?: string;
  country_name?: string;
  city?: string;
  region?: string;
  org?: string;
}

export async function POST(request: Request) {
  try {
    const formData = await request.json() as FormData;
    const { name, email, phone, product, message } = formData;

    // Get IP and location info
    const ipInfo: IpInfo = await fetch('https://ipapi.co/json/').then(res => res.json());

    // Create message for Telegram
    const telegramMessage = `
🔔 *New Contact Form Submission*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || 'Not provided'}
*Product:* ${product || 'Not specified'}
*Message:* ${message}

*IP Info:*
IP: ${ipInfo.ip || 'Unknown'}
Country: ${ipInfo.country_name || 'Unknown'}
City: ${ipInfo.city || 'Unknown'}
Region: ${ipInfo.region || 'Unknown'}
ISP: ${ipInfo.org || 'Unknown'}
Submitted at: ${new Date().toISOString()}
    `;

    // Replace with your Telegram bot token and chat ID
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram credentials not configured');
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully (telegram notification disabled)' },
        { status: 200 }
      );
    }

    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      console.error('Failed to send Telegram notification');
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process your request' },
      { status: 500 }
    );
  }
}