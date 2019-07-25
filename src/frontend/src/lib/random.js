import React from "react"
import random from "random"
import { times } from "ramda"

const createListFromRange = ([min, max]) => times(i => min + i, max - min)

export const randIndex = list => list[random.int(0, list.length - 1)]

const SPECIAL_CHAR_CODES = [
  ...createListFromRange([33, 48]),
  ...createListFromRange([58, 65]),
  ...createListFromRange([91, 97]),
  ...createListFromRange([123, 127]),
]
const ASCII_CHAR_RANGE = [32, 126]

export const getRandomInts = (n, allowedInts) => {
  const result = new Set()
  while (result.size < n) {
    const nextIndex = random.int(0, allowedInts.length - 1)
    const next = allowedInts[nextIndex]
    if (!result.has(next)) result.add(next)
  }
  return [...result]
}

const getRandomChar = allowedCodes =>
  String.fromCharCode(randIndex(allowedCodes))

export const getRandomChars = n =>
  getRandomInts(n, createListFromRange(ASCII_CHAR_RANGE)).map(
    String.fromCharCode,
  )

export const colorizeCharArray = (
  chars,
  { p = 0.1, useSpecialChar = false } = {},
) => {
  const isRed = random.bernoulli(p)
  return (
    <span>
      {chars.map(c =>
        isRed() && c.charCodeAt(0) < 128 ? (
          <span style={{ color: "red" }}>
            {useSpecialChar ? getRandomChar(SPECIAL_CHAR_CODES) : c}
          </span>
        ) : (
          c
        ),
      )}
    </span>
  )
}
