import * as Sentry from "@sentry/nextjs";
import { NextApiRequest, NextApiResponse } from 'next';

import { addSubscriber } from '@/lib/convertkit/convertkit.client';

export default function subscribe(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, botcheck } = req.body;

  if (!name || typeof name !== 'string' || !email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Name and Email required' });
  }

  if (botcheck) {
    return res.status(400).json({ message: 'No bots allowed' });
  }
  return addSubscriber(email, name)
    .then(() =>
      res.status(201).json({
        message:
          'Successfully subscribed, please check your inbox to confirm your subscription.',
      })
    )
    .catch((error) => {
      Sentry.captureException(error);
      return res.status(500).json({ message: 'Something went wrong, please try again' });
    });
}
