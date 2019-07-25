import { connect } from "react-redux"
import React, { Fragment, useState, createRef, useEffect } from "react"
import { setUsername } from "../configureStore"
import { Button, Input } from "semantic-ui-react"
import { withUsername } from "../lib/state-hocs"
import styled from "styled-components"
import { SmallTitle } from "./Title"
import { fetchAllUsers } from "../lib/api"
import { Progress } from "./Progress"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`

const UsernameForm = connect(
  null,
  { setUsername },
)(({ setUsername }) => {
  const [entry, setEntry] = useState("")
  const [existingUsers, setExistingUsers] = useState(null)
  const inputRef = createRef()

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  useEffect(() => {
    const makeRequest = async () => {
      const resp = await fetchAllUsers()
      setExistingUsers(resp)
    }
    makeRequest()
  }, [])

  const taken = existingUsers && existingUsers.includes(entry)

  return existingUsers === null ? (
    <Progress />
  ) : (
    <form>
      <Layout>
        <SmallTitle style={{ marginTop: "4rem" }}>
          Tell us your funny Name:
        </SmallTitle>
        <Input
          ref={inputRef}
          size="massive"
          onChange={(_, data) => setEntry(data.value)}
          value={entry}
          style={{
            paddingBottom: "1rem",
          }}
        />
        <Button
          disabled={!entry || entry.length > 50 || taken}
          type="submit"
          size="massive"
          color="black"
          onClick={() => setUsername(entry)}
          style={{
            height: "4rem",
            ...(taken ? { fontSize: "1.5rem" } : undefined),
          }}
        >
          {taken ? "already taken 😞" : "Let's Go!"}
        </Button>
      </Layout>
    </form>
  )
})

export const EnforceUsername = withUsername(({ username, children }) => {
  if (!username) {
    return <UsernameForm />
  } else {
    return <Fragment>{children}</Fragment>
  }
})
