import Skill from "~/interfaces/models"

/** ユーザーが選択後に/api/skillに対してPOSTでバックエンドに送信する */
export default interface SkillDataPOST {
    /** ジャンル: 言語 */
    language: readonly Skill[]

    /** ジャンル: フレームワーク */
    framework: readonly Skill[]

    /** ジャンル: データベース */
    database: readonly Skill[]

    /** ジャンル: その他 */
    service: readonly Skill[]
}