import emailjs from "@emailjs/browser";

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const TO_EMAIL = (import.meta.env.VITE_CONTACT_TO_EMAIL as string | undefined) || "izunair38@gmail.com";
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID as string | undefined;
const SITE_NAME = (import.meta.env.VITE_SITE_NAME as string | undefined) || "MV Massage";

export async function sendContactMessage(data: ContactFormData) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("Email service not configured. Missing VITE_EMAILJS_* env vars.");
  }

  // Build a simple body for the owner: user's message + their name/email/phone
  const body = `From: ${data.name}\nEmail: ${data.email}${data.phone ? `\nPhone: ${data.phone}` : ""}\n\n${data.message}`;

  const ownerParams: Record<string, string> = {
    // recipients
    to_email: TO_EMAIL,
    to_name: SITE_NAME,
    // sender context
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email,
    // subject/body variations to match common template variable names
    subject: `New website message from ${data.name}`,
    message: body,
    message_html: body,
    content: body,
    body: body,
    user_message: body,
  };

  // 1) Send to site owner
  const ownerResp = await emailjs.send(SERVICE_ID, TEMPLATE_ID, ownerParams, PUBLIC_KEY);

  // 2) Optional: send an auto-reply to the user (does not block success)
  if (AUTOREPLY_TEMPLATE_ID) {
    const autoReplyBody = `Hi ${data.name},\n\nThanks for contacting ${SITE_NAME}. We've received your message and will get back to you as soon as possible.\n\nWarm regards,\n${SITE_NAME}`;
    const autoParams: Record<string, string> = {
      to_email: data.email,
      to_name: data.name,
      from_name: SITE_NAME,
      from_email: TO_EMAIL,
      reply_to: TO_EMAIL,
      subject: `Thanks for contacting ${SITE_NAME}`,
      message: autoReplyBody,
      message_html: autoReplyBody,
      content: autoReplyBody,
      body: autoReplyBody,
      user_message: autoReplyBody,
    };

    try {
      await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, autoParams, PUBLIC_KEY);
    } catch (e) {
      // Non-fatal: log and continue so the user submission still succeeds
      console.error("Auto-reply send failed", e);
    }
  }

  return ownerResp;
}
