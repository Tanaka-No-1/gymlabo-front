import { z } from 'zod'
import SkillSet, { SkillSetScheme } from '~/interfaces/skillSet'

/** /api/readme にPOSTする際のリクエストボディのJSON型 */
export default interface ReadmeRequestData {
  skillSet: SkillSet
  idea: string
}

export const ReadmeRequestDataScheme = z.object({
  skillSet: SkillSetScheme,
  idea: z.string(),
})
