import { describe, expect, test } from 'vitest'
import ReadmeRequestData, {
  ReadmeRequestDataValidate,
} from '~/interfaces/api/readme/POSTRequest'

describe('Readme Post Request Tests', () => {
  test('正常Validation', () => {
    const data: ReadmeRequestData = {
      skillSet: {
        language: ['Swift'],
        framework: ['Vue'],
        database: ['PostgreSQL'],
        service: ['Docker'],
      },
      idea: 'Hello',
    }
    ReadmeRequestDataValidate(data)
  })

  test('異常Validation: SkillSet is invalid', () => {
    const data: ReadmeRequestData = {
      skillSet: {
        language: ['Prettier'],
        framework: ['Vue'],
        database: ['PostgreSQL'],
        service: ['Docker'],
      },
      idea: 'World',
    }
    expect(() => ReadmeRequestDataValidate(data)).toThrowError()
  })

  test('異常Validation: idea is invalid', () => {
    const data: ReadmeRequestData = {
      skillSet: {
        language: ['Swift'],
        framework: ['Vue'],
        database: ['PostgreSQL'],
        service: ['Docker'],
      },
      idea: '',
    }
    expect(() => ReadmeRequestDataValidate(data)).toThrowError()
  })
})
