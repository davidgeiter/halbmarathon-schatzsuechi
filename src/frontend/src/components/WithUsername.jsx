import { connect } from "react-redux"
import React, { Fragment, useState } from "react"
import { pick } from "ramda"
import { setUsername } from "../configureStore"

const UsernameForm = connect(
  null,
  { setUsername },
)(({ setUsername }) => {
  const [entry, setEntry] = useState("")
  return (
    <div>
      <h1>Enter your username:</h1>
      <input value={entry} onChange={e => setEntry(e.target.value)} />
      <button onClick={() => setUsername(entry)}>GO!</button>
    </div>
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
