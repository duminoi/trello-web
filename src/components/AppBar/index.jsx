// import React from "react"
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trelloIcon.svg'
import SvgIcon from '@mui/icons-material/Apps'
import { Typography } from '@mui/material'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profiles'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
export default function AppBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box
      sx={{
        width: '100%',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        paddingY: 4,
        overflowX: 'auto',
        overflowY: 'hidden',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }}></AppsIcon>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            fontSize="small"
            inheritViewBox
            sx={{ color: 'white' }}
          ></SvgIcon>
          <Typography
            variant="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white'
            }}
          >
            Trello
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces></Workspaces>
          <Recent></Recent>
          <Starred></Starred>
          <Templates></Templates>
          <Button
            sx={{
              color: 'white',
              border: 'none',
              '&:hover': {
                border: 'none'
              }
            }}
            variant="outlined"
            startIcon={<AddToPhotosIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{
                  color: searchValue ? 'white' : 'transparent',
                  cursor: 'pointer'
                }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label.Mui-focused': {
              color: 'white' // Màu khi focus
            },
            '& label': {
              color: 'white'
            },
            '& input': {
              color: 'white'
            },
            '& .label.Mui-focused': {
              color: 'white'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white' // Màu viền mặc định
              },
              '&:hover fieldset': {
                borderColor: 'white' // Màu viền khi hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white' // Màu viền khi focus
              }
            }
          }}
        />
        {/* search */}
        <ModeSelect />

        <Tooltip title="Notifications">
          <IconButton>
            <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </IconButton>
        </Tooltip>
        {/* notification */}

        <Tooltip title="Help">
          <IconButton>
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <HelpOutlineIcon sx={{ color: 'white' }} />
            </Badge>
          </IconButton>
        </Tooltip>
        {/* help */}

        <Profile />
      </Box>
    </Box>
  )
}
