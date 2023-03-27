import { z } from 'zod'
import SkillSet, {
  SkillSetScheme,
  SkillSetValidate,
} from '~/interfaces/skillSet'

/** /api/readme にPOSTする際のリクエストボディのJSON型 */
export default interface ReadmeRequestData {
  skillSet: SkillSet
  idea: string
}

export const ReadmeRequestDataScheme = z.object({
  skillSet: SkillSetScheme,
  idea: z.string(),
})

export function ReadmeRequestDataValidate(
  data: ReadmeRequestData,
): void | never {
  SkillSetValidate(data.skillSet)
  if (data.idea === '') {
    throw new Error('アイデアが空です')
  }
}
