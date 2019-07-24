const { hostname, protocol } = window.location

export const apiBaseUrl = `${protocol}//${hostname}/api`
