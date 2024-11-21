import Button from "@mui/material/Button"
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import ThreeDRotation from "@mui/icons-material/ThreeDRotation"
import { Typography, useColorScheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined"
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness"
import Box from "@mui/material/Box"

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  console.log("🚀 ~ ModeSelect ~ mode:", mode)

  const handleChange = (event) => {
    const selectMode = event.target.value
    setMode(selectMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Theme</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={"light"}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon />
            <div>Light</div>
          </Box>
        </MenuItem>
        <MenuItem value={"dark"}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutLinedIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value={"system"}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
      <br />
      <hr />
      <div>Duminoi dev</div>

      <Typography variant="body2" color="text.secondary">
        Test Typography
      </Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained" color="success">
        Contained
      </Button>

      <Button variant="outlined">Outlined</Button>
      <br />
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThreeDRotation></ThreeDRotation>
      <br />
    </>
  )
}

export default App
