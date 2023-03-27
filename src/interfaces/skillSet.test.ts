import { describe, expect, test } from 'vitest'
import SkillSet, { SkillSetValidate } from '~/interfaces/skillSet'

describe('SkillSet Tests', () => {
  test('SkillSetの言語の正常validate', () => {
    const skillSet: SkillSet = {
      language: ['Lisp', 'Swift', 'Go'],
      database: [],
      framework: [],
      service: [],
    }
    SkillSetValidate(skillSet)
  })

  test('SkillSetの言語の異常validate', () => {
    const skillSet: SkillSet = {
      language: ['Lisp', 'Swift', 'Lanp'],
      database: [],
      framework: [],
      service: [],
    }
    expect(() => SkillSetValidate(skillSet)).toThrowError()
  })

  test('SkillSetのDBの正常validate', () => {
    const skillSet: SkillSet = {
      language: [],
      database: ['Redis', 'MariaDB', 'PostgreSQL'],
      framework: [],
      service: [],
    }
    SkillSetValidate(skillSet)
  })

  test('SkillSetのDBの異常validate', () => {
    const skillSet: SkillSet = {
      language: ['db', 'MariaDB', 'PostgreSQL'],
      database: [],
      framework: [],
      service: [],
    }
    expect(() => SkillSetValidate(skillSet)).toThrowError()
  })

  test('SkillSetのFWの正常validate', () => {
    const skillSet: SkillSet = {
      language: [],
      database: [],
      framework: ['React', 'Laravel', 'Node.js'],
      service: [],
    }
    SkillSetValidate(skillSet)
  })

  test('SkillSetのFWの異常validate', () => {
    const skillSet: SkillSet = {
      language: [],
      database: [],
      framework: ['React', 'heroku', 'Node.js'],
      service: [],
    }
    expect(() => SkillSetValidate(skillSet)).toThrowError()
  })

  test('SkillSetのServiceの正常validate', () => {
    const skillSet: SkillSet = {
      language: [],
      database: [],
      framework: [],
      service: ['GitHub', 'Kubernetes', 'Docker'],
    }
    SkillSetValidate(skillSet)
  })

  test('SkillSetのServiceの異常validate', () => {
    const skillSet: SkillSet = {
      language: [],
      database: [],
      framework: [],
      service: ['GitHub', 'Swift', 'Docker'],
    }
    expect(() => SkillSetValidate(skillSet)).toThrowError()
  })
})
