import { connect } from "react-redux"
import React, { Fragment, useState, createRef, useEffect } from "react"
import { pick } from "ramda"
import { setUsername } from "../configureStore"
import { Modal, Header, Button, Input, Form } from "semantic-ui-react"

const UsernameForm = connect(
  null,
  { setUsername },
)(({ setUsername }) => {
  const [entry, setEntry] = useState("")
  const inputRef = createRef()

  useEffect(() => {
    setTimeout(() => inputRef.current && inputRef.current.focus(), 1000)
  }, [])

  return (
    <Modal centered={false} defaultOpen={true} size="large">
      <Modal.Header>Tell us your name!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={() => setUsername(entry)}>
            <Form.Input
              ref={inputRef}
              focus
              value={entry}
              onChange={e => setEntry(e.target.value)}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
})

export const withUsername = C => connect(pick(["username"]))(C)

export const EnforceUsername = withUsername(({ username, children }) => {
  if (!username) {
    return <UsernameForm />
  } else {
    return <Fragment>{children}</Fragment>
  }
})
