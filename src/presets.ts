import { Rando } from './'
import { NUMBERS } from './constants'

// Rando
export const rando = new Rando()

// Creates a secure key with 256 bits of entropy
export const locker = new Rando({
  randomLength: 44,
})

// Pin
export const pinto = new Rando({
  alphabet: NUMBERS,
  randomLength: 6,
})

// Sortable (like UUIDv7 but more compact)
export const sortable = new Rando({
  randomLength: 14,
  includeTimestamp: true,
  timestampPosition: 'start',
})

// Creates a short sortable id with a practical amount of entropy for many use cases
export const particle = new Rando({
  randomLength: 8,
  includeTimestamp: true,
})
