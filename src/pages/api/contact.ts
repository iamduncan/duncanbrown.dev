import { NextApiRequest, NextApiResponse } from 'next';

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message, botcheck, recaptcha_token } = req.body;
  const recaptcha_secret = process.env.RECAPTCHA_SECRET || '';

  if (!name || typeof name !== 'string' || !email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Name and Email required', status: 'error' });
  }

  if (botcheck || !recaptcha_token) {
    return res.status(400).json({ message: 'No bots allowed', status: 'error' });
  }

  // verify google v3 recaptcha token
  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptcha_secret}&response=${recaptcha_token}`,
    {
      method: 'POST',
    }
  );

  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    return res.status(400).json({ message: 'No bots allowed', status: 'error' });
  }

  try {
    await fetch(`${process.env.URL}/.netlify/functions/emails/contact`, {
      headers: {
        'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET || '',
      },
      method: 'POST',
      body: JSON.stringify({
        from: 'duncanbrown.dev <website@duncanbrown.dev>',
        to: 'Duncan <duncan.brown@duncanbrown.dev>',
        subject: 'duncanbrown.dev contact form message received',
        parameters: {
          message,
          name,
          email,
          date: new Date().toLocaleString(),
        },
      }),
    });

    return res.status(200).json({ message: 'Message sent', status: 'success' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', status: 'error' });
  }
}
