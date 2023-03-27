import GenerateIdeas from '~/interfaces/ai/generateIdeas'
import SkillSet from '~/interfaces/skillSet'

type Ideas = readonly string[]

export default class IdeaService {
  /** 同時アイデア生成回数 */
  static readonly MULTI_GENERATE_COUNT = 3

  /** 試行上限回数 */
  static readonly TRY_LIMIT = 3

  constructor(private readonly ideasGenerator: GenerateIdeas) {}

  /** アイデアを複数回生成し、最も合計文字長が長いものを選択して返す */
  async generate(skillSet: SkillSet): Promise<Ideas> {
    const ideas = await this.generateUntilOneOrMore(skillSet)
    return ideas.slice().sort((a, b) => {
      return b.join('').length - a.join('').length
    })[0]
  }

  /** 1つ以上は必ずアイデアを生成する */
  private async generateUntilOneOrMore(
    skillSet: SkillSet,
  ): Promise<readonly Ideas[]> {
    for (let i = 0; i < IdeaService.TRY_LIMIT; i++) {
      const ideas = await this.multiGenerate(skillSet)
      if (ideas.length === 0) continue
      return ideas
    }
    throw new Error(`${IdeaService.MULTI_GENERATE_COUNT}回同時試行を${IdeaService.TRY_LIMIT}回失敗`)
  }

  /** アイデアを同時に複数個生成する。エラーが出たものは取り除かれる */
  private async multiGenerate(skillSet: SkillSet): Promise<readonly Ideas[]> {
    return (await this.multiGenerateOption(skillSet))
      .filter((el) => el != null)
      .map((el) => el as Ideas)
  }

  /** アイデアを同時アイデア生成回数分作成する。エラーが投げられた場合nullを返す */
  private multiGenerateOption(
    skillSet: SkillSet,
  ): Promise<readonly (Ideas | null)[]> {
    return Promise.all(
      [...Array(IdeaService.MULTI_GENERATE_COUNT)].map(() =>
        this.generateOption(skillSet),
      ),
    )
  }

  /** アイデアを生成する。エラーが出た場合nullを返す */
  private async generateOption(skillSet: SkillSet): Promise<Ideas | null> {
    try {
      return await this.ideasGenerator(skillSet)
    } catch {
      return null
    }
  }
}
