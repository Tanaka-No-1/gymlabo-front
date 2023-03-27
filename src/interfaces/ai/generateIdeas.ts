import SkillSet from '~/interfaces/skillSet'

type GenerateIdeas = (skillSet: SkillSet) => Promise<readonly string[]>

export default GenerateIdeas
