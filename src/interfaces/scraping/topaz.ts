import Skill from '~/interfaces/models'

/** トパーズから技術スタックをスクレイピングして返す */
export type TopazSkillsScraper = () => Promise<TopazSkills>

export interface TopazSkills {
  /** ジャンル: 言語 */
  language: readonly Skill[]

  /** ジャンル: フレームワーク */
  framework: readonly Skill[]

  /** ジャンル: データベース */
  database: readonly Skill[]

  /** ジャンル: その他 */
  service: readonly Skill[]
}
