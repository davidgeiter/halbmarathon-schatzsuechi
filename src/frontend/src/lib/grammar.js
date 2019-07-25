const plurals = {
  coin: "coins",
  code: "codes",
}

export const pluralize = (count, noun) => {
  if (count === 1) return noun

  return plurals[noun] || noun
}
