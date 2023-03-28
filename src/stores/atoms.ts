import { atom } from 'recoil'
import SkillSet from '~/interfaces/skillSet'

export const ideaListState = atom<string[]>({
  key: 'ideaListState',
  default: [],
})

export const skillSetState = atom<SkillSet>({
  key: 'skillSetState',
  default: {
    language: [],
    framework: [],
    database: [],
    service: [],
  },
})
