import { NextApiRequest, NextApiResponse } from 'next';

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message, botcheck } = req.body;

  if (!name || typeof name !== 'string' || !email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Name and Email required' });
  }

  if (botcheck) {
    return res.status(400).json({ message: 'No bots allowed' });
  }

  await fetch(`${process.env.URL}/.netlify/functions/emails/contact`, {
    headers: {
      'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET || '',
    },
    method: 'POST',
    body: JSON.stringify({
      from: 'duncanbrown.dev <website@duncanbrown.dev>',
      to: 'Duncan <duncan.brown@duncanbrown.dev>',
      subject: 'Website Contact form completed',
      parameters: {
        message,
      },
    }),
  });
}
