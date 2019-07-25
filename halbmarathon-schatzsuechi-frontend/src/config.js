const { hostname, protocol } = window.location
const apiPort = process.env.REACT_APP_API_PORT || ""

export const apiBaseUrl = `${protocol}//${hostname}:${apiPort}/api`
