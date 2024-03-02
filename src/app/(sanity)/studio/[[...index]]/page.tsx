'use client';

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio v3.
 * All routes under /studio will be handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio';
import config from 'sanity.config';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { ErrorInfo } from 'react';
import Head from 'next/head';
import { metadata } from 'next-sanity/studio'

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

const logError = (error: Error, info: ErrorInfo) => {
  // Do something with the error, e.g. log to an external API
  Sentry.captureException(error);
};

export default function StudioPage() {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
      onError={logError}
    >
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
+        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      </Head>
      <NextStudio config={config} />
    </ErrorBoundary>
  );
}
