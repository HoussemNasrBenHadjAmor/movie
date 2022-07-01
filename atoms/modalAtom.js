import { atom } from 'recoil'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const trailerState = atom({
  key: 'trailerState',
  default: null,
})
