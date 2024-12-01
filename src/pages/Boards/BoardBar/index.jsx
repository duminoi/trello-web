// import React from 'react'
import Box from '@mui/material/Box'

import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import avatar from '~/assets/Avatar/dog.jfif'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
export default function BoardBar() {
  return (
    <Box
      sx={{
        // backgroundColor: "primary.dark",
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        overflowY: 'hidden',
        borderTop: '1px solid #00bfa5'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="duminoi Fullstack web"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/private workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to google drive"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
          <Tooltip title="Duminoi">
            <Avatar alt="Duminoi" src={avatar} />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
