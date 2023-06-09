import { z } from 'zod'
import SkillSet, {
  SkillSetScheme,
  SkillSetValidate,
} from '~/interfaces/skillSet'

/** ユーザーが選択後に/api/skillに対してPOSTでバックエンドに送信する */
export default interface SkillPostRequestData {
  skillSet: SkillSet
}

export const SkillDataPOSTScheme = z.object({
  skillSet: SkillSetScheme,
})

export function SkillDataPostValidate(
  data: SkillPostRequestData,
): void | never {
  SkillSetValidate(data.skillSet)
}
