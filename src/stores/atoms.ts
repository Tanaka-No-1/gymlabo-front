import { atom } from 'recoil'

export const ideaListState = atom<string[]>({
  key: 'ideaListState',
  default: [],
})
