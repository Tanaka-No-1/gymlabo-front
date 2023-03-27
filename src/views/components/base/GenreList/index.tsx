import Image from 'next/image'
import { ChangeEvent, FC } from 'react'
import {
  GenreContainer,
  GenreNameTextWrapper,
  SkillContainer,
  SkillsContainer,
} from './style'
import { Skill } from '~/testdata/skills'

type Props = {
  skills: Skill[]
  genreName: string
  selected: Skill[]
  setSelected: (selected: Skill[]) => void
}

const GenreList: FC<Props> = ({ skills, genreName, selected, setSelected }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, skill: Skill) => {
    if (selected.includes(skill)) {
      setSelected(selected.filter((item) => item != skill))
    } else {
      setSelected(selected.concat([skill]))
    }
  }

  return (
    <div css={GenreContainer}>
      <div css={GenreNameTextWrapper}>
        <p>{genreName}</p>
      </div>
      <div css={SkillsContainer}>
        {skills.map((skill) => {
          return (
            <div key={skill.name} css={SkillContainer}>
              <input
                type="checkbox"
                checked={selected.includes(skill)}
                onChange={(e) => onChangeHandler(e, skill)}
              />
              <Image src={skill.url} width={20} height={20} alt="" />
              <span>{skill.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GenreList
