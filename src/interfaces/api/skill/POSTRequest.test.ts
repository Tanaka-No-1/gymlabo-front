import { describe, expect, test } from 'vitest'
import SkillPostRequestData, {
  SkillDataPostValidate,
} from '~/interfaces/api/skill/POSTRequest'

describe('Skill Post Request Tests', () => {
  test('正常Validation', () => {
    const data: SkillPostRequestData = {
      skillSet: {
        language: ['Swift'],
        framework: ['Vue'],
        database: ['PostgreSQL'],
        service: ['Docker'],
      },
    }
    SkillDataPostValidate(data)
  })

  test('異常Validation', () => {
    const data: SkillPostRequestData = {
      skillSet: {
        language: ['Prettier'],
        framework: ['Vue'],
        database: ['PostgreSQL'],
        service: ['Docker'],
      },
    }
    expect(() => SkillDataPostValidate(data)).toThrowError()
  })
})
