import { z } from 'zod'

export default interface SkillSet {
  /** ジャンル: 言語 */
  language: readonly string[]

  /** ジャンル: フレームワーク */
  framework: readonly string[]

  /** ジャンル: データベース */
  database: readonly string[]

  /** ジャンル: その他 */
  service: readonly string[]
}

export const SkillSetScheme = z.object({
  language: z.string().array(),
  framework: z.string().array(),
  database: z.string().array(),
  service: z.string().array(),
})
