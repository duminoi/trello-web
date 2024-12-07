// import React from 'react'
import Box from '@mui/material/Box'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTERf_HEIGHT = '50px'

export default function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        display: 'flex' 
        // alignItems: 'center'
      }}
    >
      {/* Box Column */}
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: '2px',
          borderRadius: '6px'
        }}
      >
        <Box sx={{}}>Header</Box>
        <Box sx={{}}>List card</Box>
        <Box sx={{}}>Footer</Box>
      </Box>
    </Box>
  )
}
