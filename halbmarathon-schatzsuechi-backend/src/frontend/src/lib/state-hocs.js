import { connect } from "react-redux"
import { pick } from "ramda"
import { toggleScanner } from "../configureStore"

export const withUsername = connect(pick(["username"]))
export const withScannerOpened = connect(
  pick(["scannerOpened"]),
  { toggleScanner },
)
