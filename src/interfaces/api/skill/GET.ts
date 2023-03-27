import Skill from "~/interfaces/models"

/**
 * /api/skillのエンドポイントでGETで返すJSONデータ
 */
export default interface SkillDataGet {
    /** ジャンル: 言語 */
    language: readonly Skill[]

    /** ジャンル: フレームワーク */
    framework: readonly Skill[]

    /** ジャンル: データベース */
    database: readonly Skill[]

    /** ジャンル: その他 */
    service: readonly Skill[]
}
