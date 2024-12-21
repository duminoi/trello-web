import { Box } from '@mui/material'
import Card from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export default function ListCards({ cards }) {
  return (
    // List card of Column
    <SortableContext
      items={cards?.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          p: '0 5px',
          m: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowY: 'auto',
          maxHeight: (theme) =>
            `calc(${theme.trello.boardContentHeight} - 
           ${theme.spacing(5)} - 
           ${theme.trello.columnHeaderHeight} - 
           ${theme.trello.columnFooterHeight}
           )`,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf'
          }
        }}
      >
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  )
}
