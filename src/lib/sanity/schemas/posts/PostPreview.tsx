import { Box, Text } from '@sanity/ui';
import { ComponentProps, Suspense } from 'react';
import { isRecord, isString, useClient } from 'sanity';
import { UserViewComponent } from 'sanity/desk';
import styled from 'styled-components';
import { suspend } from 'suspend-react';

import { apiVersion, previewSecretDocumentId } from '../../env';
import { getSecret } from '../../lib/secret';
import { usePreview } from '../../preview';

const FETCH_SECRET = Symbol('preview.secret');

const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`;

export function PostPreview(props: ComponentProps<UserViewComponent>) {
  const {
    document: { displayed },
    documentId,
    schemaType,
  } = props;

  const id = documentId;
  const type = schemaType.name;
  const slug =
    isRecord(displayed.slug) && isString(displayed.slug.current)
      ? displayed.slug.current
      : undefined;

  if (!slug) {
    return (
      <Box>
        <Text>Missing slug</Text>
      </Box>
    );
  }

  return <Suspense fallback={null}></Suspense>;
}

function PagePreviewWithSecret({ token }: { token: string }) {
  const query = '';
  const data = usePreview(token, query);

  return <StyledIframe src={`/api/sanity/preview`} />;
}
