import { AlreadyScanned } from "./AlreadyScanned"
import { Success } from "./Success"
import React from "react"
import { Overlay } from "../Overlay"
import { InvalidCode } from "./InvalidCode"
import { NotEnoughCash } from "./NotEnoughCash"
import { CashSpent } from "./CashSpent"

export const ResultOverlay = ({ status, difference, onClose }) => {
  let content
  switch (status) {
    case "SUCCESS":
      content =
        difference > 0 ? (
          <Success difference={difference} />
        ) : (
          <CashSpent difference={difference} />
        )
      break
    case "ALREADY_SCANNED":
      content = <AlreadyScanned />
      break
    case "INVALID_CODE":
      content = <InvalidCode />
      break
    case "NOT_ENOUGH_CASH":
      content = <NotEnoughCash />
      break
  }

  return <Overlay onClose={onClose}>{content}</Overlay>
}
