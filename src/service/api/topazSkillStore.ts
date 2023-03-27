import { TopazSkills, TopazSkillsScraper } from '~/interfaces/scraping/topaz'

/** TopazSkillのキャッシュ付きストア */
export default class TopazSkillStore {
  // 期限: 一週間
  static readonly MAX_LIMIT_MS =
    7 /*[日]*/ * 24 /*[時間]*/ * 60 /*[分]*/ * 60 /*[秒]*/ * 1000 /*[ms]*/

  constructor(
    private readonly scraper: TopazSkillsScraper,
    private skill: TopazSkills | null = null,
    private updatedAt: Date = new Date(),
  ) {}

  /** キャッシュされていればそれを返却。なければスクレイピング・キャッシュして返す */
  async get(): Promise<TopazSkills> {
    if (this.skill != null && !this.isOverLimitDate) {
      return this.skill
    }
    const scraped = await this.scraper()
    this.cache(scraped)
    return scraped
  }

  private cache(data: TopazSkills): void {
    this.skill = data
    this.updatedAt = new Date()
  }

  /** キャッシュ期限切れか */
  private get isOverLimitDate(): boolean {
    return this.elapsedTime > TopazSkillStore.MAX_LIMIT_MS
  }

  /** 更新時からの経過時間[ms] */
  private get elapsedTime(): number {
    return this.nowTime - this.updatedTime
  }

  /** 現在の時間[ms] */
  private get nowTime(): number {
    return new Date().getTime()
  }

  /** 更新時の時間[ms] */
  private get updatedTime(): number {
    return this.updatedAt.getTime()
  }
}
