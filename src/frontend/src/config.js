const { hostname, protocol } = window.location

export const apiBaseUrl = `${protocol}//${hostname}:8080/api`
