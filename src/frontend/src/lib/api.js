import { apiHost } from "../config"

const sendRequest = async ({ path, username, method = "get" }) => {
  const resp = await fetch(
    `${apiHost}${path}${username ? `?username=${username}` : ""}`,
    {
      method,
    },
  )
  const json = await resp.json()

  return json
}

export const getStats = async username =>
  sendRequest({ path: `/stats`, username })

export const sendCode = (code, username) =>
  sendRequest({ path: `/currency/${code}`, username, method: "post" })
