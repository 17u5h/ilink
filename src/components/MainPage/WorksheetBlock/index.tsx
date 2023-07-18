import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import ConstructorWord from '../ConstructorBlock/ConstructorWord'

const WorksheetBlock = () => {
  const { constructorArray } = useWorkplaceStore(({ constructorArray }) => ({ constructorArray }))
  console.log('here')

  return (
    <S.WorksheetBlock>
      {constructorArray.map((el) => (
        <ConstructorWord key={el.id} word={el.word} />
      ))}
    </S.WorksheetBlock>
  )
}

export default WorksheetBlock