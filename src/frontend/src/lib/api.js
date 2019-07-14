import { apiBaseUrl } from "../config"

const sendRequest = async ({ path, username, method }) => {
  const url = `${apiBaseUrl}${path}${username ? `?username=${username}` : ""}`
  const resp = await fetch(url, {
    method: method || "get",
  })
  const json = await resp.json()

  return json
}

export const getStats = async username =>
  sendRequest({ path: `/stats`, username })

export const sendCode = (code, username) =>
  sendRequest({ path: `/currency/${code}`, username, method: "post" })
