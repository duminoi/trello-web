// import React from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

export default function BoardContent({ board }) {
  const [orderedColumn, setOrderedColumn] = useState([])

  //https://docs.dndkit.com/api-documentation/sensors#ussesensor
  // Yêu cầu chuột phải di chuyển chuột 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const mySensors = useSensors(pointerSensor)

  const handleDragEnd = (event) => {
    console.log('🚀 ~ handleDragEnd ~ event:', event)
    const { active, over } = event
    // Nếu kéo linh tinh(ko tồn tại over) thì sẽ return luôn tránh lỗi
    if (!over) return

    // Nếu kéo vị trí mới khác vị trí ban đầu
    if (active.id != over.id) {
      // Lấy vị trí cũ(từ active)
      const oldIndex = orderedColumn.findIndex((c) => c._id === active.id)
      // Lấy vị trí mới(từ over)
      const newIndex = orderedColumn.findIndex((c) => c._id === over.id)

      // Dùng arrayMove của thằng dnd-kit để săp xếp lại mảng Columns ban đầu
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
  }

  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
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
      </Box>
    </DndContext>
  )
}
