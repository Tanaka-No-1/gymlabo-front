import { z } from 'zod'
import {
  database,
  framework,
  languages,
  service,
  Skill,
} from '~/testdata/skills'

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

export function SkillSetValidate(skillSet: SkillSet): void | never {
  if (!isValidSkillNames(skillSet.language, languages)) {
    throw new Error(`${skillSet.language} includes invalid skill`)
  }
  if (!isValidSkillNames(skillSet.database, database)) {
    throw new Error(`${skillSet.database} includes invalid skill`)
  }
  if (!isValidSkillNames(skillSet.framework, framework)) {
    throw new Error(`${skillSet.framework} includes invalid skill`)
  }
  if (!isValidSkillNames(skillSet.service, service)) {
    throw new Error(`${skillSet.service} includes invalid skill`)
  }
}

function isValidSkillNames(
  skillNames: readonly string[],
  skills: readonly Skill[],
): boolean {
  return skillNames.every((name) => isValidSkillName(name, skills))
}

function isValidSkillName(
  skillName: string,
  skills: readonly Skill[],
): boolean {
  return skills.map((s) => s.name).includes(skillName)
}
