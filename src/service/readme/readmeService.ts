import GenerateReadme from '~/interfaces/ai/generateReadme'
import SkillSet from '~/interfaces/skillSet'

export default class ReadmeService {
  static readonly TRY_LIMIT = 3

  constructor(private readonly readmeGenerator: GenerateReadme) {}

  async generate(skillSet: SkillSet, applicationContent: string) {
    for (let i = 0; i < ReadmeService.TRY_LIMIT; i++) {
      try {
        return await this.readmeGenerator(skillSet, applicationContent)
      } catch (_) {
        /* empty */
      }
    }
    throw new Error(`READMEの生成を${ReadmeService.TRY_LIMIT}回試行して失敗`)
  }
}
