import React, { Component, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import theme from '../../../config/theme'
import { rhythm } from '../../lib/typography'
import { bpMaxSM } from '../../lib/breakpoints'
import Message from '../ConfirmMessage/Message'
import { PleaseConfirmIllustration } from '../ConfirmMessage/Illustrations'

const CommentSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  name: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
  url: Yup.string().url('Invalid url'),
})

const Comment = ({slug}) => {
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const successful = response && response.status === 'success'

  const handleSubmit = async (values) => {
    const staticmanUrl =
      'https://dev.staticman.net/v3/entry/github/iamduncan/duncanbrown.dev/site-and-layout-updates'
    setSubmitted(true)
    const data = JSON.stringify({slug: slug, ...values}, null, 2);

    try {
      const response = await fetch(staticmanUrl, {
        method: 'post',
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const responseJson = await response.json()

      setSubmitted(true)
      setResponse(responseJson)
      setErrorMessage(null)
    } catch (error) {
      setSubmitted(false)
      setErrorMessage('Something went wrong')
      console.log(error)
    }
  }

  return (
    <div>
    {!successful && (
      <h2
        css={css`
            margin-bottom: ${rhythm(1)};
            margin-top: 0
        `}
      >
        Comment
      </h2>
    )}

    <Formik
      initialValues={{ email: '', name: '', message: '', url: '' }}
      validationSchema={CommentSchema}
      onSubmit={values => handleSubmit(values)}
      render={({ errors, touched, isSubmitting }) => (
        <>
          {!successful && (
            <Form
              css={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                label {
                  width: 100%;
                }
                button {
                  margin-left: 10px;
                }
                .field-error {
                  display: block;
                  color: ${theme.colors.red};
                  font-size: 80%;
                }
                input, textarea {
                  margin: 5px 0 0 0 !important;
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                }
                button {
                  margin: 20px 0 0 0;
                }
                label
                ${bpMaxSM} {
                  flex-direction: column;
                  align-items: flex-start;
                  width: auto;
                  label,
                  input {
                    margin: 5px 0 0 0 !important;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                  }
                  button {
                    margin: 20px 0 0 0;
                  }
                }
              `}
            >
              <label htmlFor="name">
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                  `}
                >
                  Name
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="field-error"
                  />
                </div>
                <Field
                  aria-label="your name"
                  aria-required="true"
                  name="name"
                  type="text"
                />
              </label>
              <label htmlFor="email">
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                  `}
                >
                  Email Address
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="field-error"
                  />
                </div>
                <Field
                  aria-label="your email address"
                  aria-required="true"
                  name="email"
                  type="email"
                />
              </label>
              <label htmlFor="url">
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                  `}
                >
                  Website URL
                  <ErrorMessage
                    name="url"
                    component="span"
                    className="field-error"
                  />
                </div>
                <Field
                  aria-label="your website url"
                  aria-required="false"
                  name="url"
                  type="text"
                />
              </label>
              <label htmlFor="message">
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                  `}
                >
                  Message
                  <ErrorMessage
                    name="message"
                    component="span"
                    className="field-error"
                  />
                </div>
                <Field
                  aria-label="your message"
                  aria-required="true"
                  name="message"
                  component="textarea"
                />
              </label>
              <button
                data-element="submit"
                type="submit"
                disabled={isSubmitting}
              >
                {!isSubmitting && 'Submit'}
                {isSubmitting && 'Submitting...'}
              </button>
            </Form>
          )}
          {submitted &&
            !isSubmitting && <PostSubmissionMessage response={response} />}
          {errorMessage && <div>{errorMessage}</div>}
        </>
      )}
    />
  </div>
  )
}

export default Comment
