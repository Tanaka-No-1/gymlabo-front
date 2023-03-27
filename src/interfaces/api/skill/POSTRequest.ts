import { z } from 'zod'
import SkillSet, { SkillSetScheme } from '~/interfaces/skillSet'

/** ユーザーが選択後に/api/skillに対してPOSTでバックエンドに送信する */
export default interface SkillPostRequestData {
  skillSet: SkillSet
}

export const SkillDataPOSTScheme = z.object({
  skillSet: SkillSetScheme,
})
