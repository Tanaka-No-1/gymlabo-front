import SkillDataPOST from '~/interfaces/api/skill/POST'

type GenerateReadme = (
  skill: SkillDataPOST,
  applicationContent: string,
) => Promise<string>

export default GenerateReadme
