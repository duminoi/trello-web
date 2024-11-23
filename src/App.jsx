
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined"
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness"
import Box from "@mui/material/Box"
import LightModeIcon from "@mui/icons-material/LightMode"
import { Container, useColorScheme } from "@mui/material"


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
      <Container
        disableGutters
        maxWidth="false"
        sx={{ height: "100vh" }}
      >
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: "100%",
            height: (theme) => theme.trello.appBarHeight,
            display: "flex",
            alignItems: "center"
          }}
        >
          <ModeSelect />
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.dark",
            width: "100%",
            height: (theme) => theme.trello.boardBarHeight,
            display: "flex",
            alignItems: "center"
          }}
        >
          Board bar
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight })`,
            display: "flex",
            alignItems: "center"
          }}
        >
          Board content
        </Box>
      </Container>
    </>
  )
}

export default App
