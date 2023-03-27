import { z } from 'zod'

export default interface Skill {
  /** 技術アイコンのURL */
  icon: string

  /** 技術名 */
  name: string
}

export const SkillScheme = z.object({
  icon: z.string(),
  name: z.string(),
})
