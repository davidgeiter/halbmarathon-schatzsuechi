import styled from "styled-components"
import React from "react"
import { CloseButton } from "./QrCodeReader"
import { Layout } from "../App"

const BaseOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);

  h1,
  h2 {
    color: white;
  }
`

export const Overlay = ({ children, onClose }) => (
  <>
    <BaseOverlay>
      <Layout>{children}</Layout>
    </BaseOverlay>
    <CloseButton onClick={onClose} />
  </>
)
