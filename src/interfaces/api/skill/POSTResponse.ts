/** /api/skillにPOSTのリクエストを送った際のレスポンス */
export default interface SkillPostResponseData {
  /** アイデア一覧 */
  ideas: readonly string[]
}
