// import React from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

export default function BoardContent({ board }) {
  const [orderedColumn, setOrderedColumn] = useState([])

  //Cùng một thời điểm chỉ có một phần tử đang được kéo (column hoặc card)
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  // hoặc có thể gộp lại state (tùy)
  // console.log('component re-render')

  //https://docs.dndkit.com/api-documentation/sensors#ussesensor
  // Nếu dùng pointerSensor mặc định thì phải kết hợp thuộc tính CSS touch-action: none ở những phần tử kéo thả - nhưng mà còn bug
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10
  //   }
  // })

  // Yêu cầu chuột phải di chuyển chuột 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })

  // Nhấn giữ 250ms và dung sai của cảm ứng thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 500
    }
  })

  // Ưu tiên sử dụng kết hợp 2 loại sensors là mouse và touch để có trải nghiệm trên mobile tốt nhất, tránh bị bug
  const mySensors = useSensors(mouseSensor, touchSensor)

  // Trigger khi bắt đầu kéo một phần tử
  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    )
    setActiveDragItemData(event?.active?.data?.current)
  }

  //Trigger khi kết thúc hành động kéo(drag) một phần tử => hành động thả (drop)
  const handleDragEnd = (event) => {
    const { active, over } = event
    // Nếu kéo linh tinh(ko tồn tại over) thì sẽ return luôn tránh lỗi
    if (!over) return

    // Nếu kéo vị trí mới khác vị trí ban đầu
    if (active.id != over.id) {
      // Lấy vị trí cũ(từ active)
      const oldIndex = orderedColumn.findIndex((c) => c._id === active.id)
      // Lấy vị trí mới(từ over)
      const newIndex = orderedColumn.findIndex((c) => c._id === over.id)

      // Dùng arrayMove của dnd-kit để săp xếp lại mảng Columns ban đầu
      const dndOrderedColumns = arrayMove(orderedColumn, oldIndex, newIndex)
      // 2 cái console.log dữ liệu này dùng để xử lý gọi API
      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)
      // console.log('🚀 ~ handleDragEnd ~ dndOrderedColumns:', dndOrderedColumns)
      // console.log(
      //   '🚀 ~ handleDragEnd ~ dndOrderedColumnsIds:',
      //   dndOrderedColumnsIds
      // )

      setOrderedColumn(dndOrderedColumns)
    }

    setActiveDragItemData(null)
    setActiveDragItemId(null)
    setActiveDragItemType(null)
  }

  // Animation khi drop phần tử - Test bằng cách kéo xong thả trực tiếp và nhìn phần giữ chỗ OverLay
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { opacity: '0.5' } }
    })
  }

  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={mySensors}
    >
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumn} />
        <DragOverlay dropAnimation={customDropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
              <Column column={activeDragItemData} />
            )}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
              <Card card={activeDragItemData} />
            )}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}
