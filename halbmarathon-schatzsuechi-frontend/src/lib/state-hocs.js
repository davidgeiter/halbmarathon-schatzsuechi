import { connect } from "react-redux"
import { pick } from "ramda"
import { toggleScanner, setScanResult } from "../configureStore"

export const withUsername = connect(pick(["username"]))
export const withScannerOpened = connect(
  pick(["scannerOpened"]),
  { toggleScanner },
)
export const withScanResult = connect(
  pick(["scanResult"]),
  {
    setScanResult,
  },
)
