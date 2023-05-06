const addSubscriber = async (email: string, name: string) => {
  const formId = process.env.CONVERTKIT_FORM;
  const apiKey = process.env.CONVERTKIT_KEY;
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;

  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      first_name: name,
      api_key: apiKey as string,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export { addSubscriber };
