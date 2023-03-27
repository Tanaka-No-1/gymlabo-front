import SkillSet from '~/interfaces/skillSet'

type GenerateReadme = (
  skillSet: SkillSet,
  applicationContent: string,
) => Promise<string>

export default GenerateReadme
