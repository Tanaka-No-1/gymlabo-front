import SkillDataPOST from '~/interfaces/api/skill/POST'

type GenerateIdeas = (data: SkillDataPOST) => Promise<readonly string[]>

export default GenerateIdeas
