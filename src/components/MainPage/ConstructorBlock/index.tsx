import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import DraggableWord from './DraggableWord'
import { useDragDropStore } from '../../../store/dragDropStore'
import { moveWordFromTo } from '../../../lib/moveWordFromTo'

const ConstructorBlock = () => {
  const { constructorArray, dispatchConstructorArray, worksheetArray, dispatchWorksheetArray } =
    useWorkplaceStore(
      ({ constructorArray, dispatchConstructorArray, worksheetArray, dispatchWorksheetArray }) => ({
        constructorArray,
        dispatchConstructorArray,
        worksheetArray,
        dispatchWorksheetArray
      })
    )
  const { currentWord } = useDragDropStore(({ currentWord }) => ({ currentWord }))

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const isToWorksheet = false

    moveWordFromTo(
      isToWorksheet,
      currentWord,
      worksheetArray,
      constructorArray,
      dispatchWorksheetArray,
      dispatchConstructorArray
    )
  }
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <S.ConstructorBlock onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
      {constructorArray.map((el) => (
        <DraggableWord key={el.id} word={el} isWorksheet={false} />
      ))}
    </S.ConstructorBlock>
  )
}

export default ConstructorBlock
