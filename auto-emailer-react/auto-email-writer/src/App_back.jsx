
import {
  Container,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  AppBar,
  Toolbar
} from '@mui/material'
import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [emailContent, setEmailContent] = useState("")
  const [emailTone, setEmailTone] = useState("")
  const [generatedReply, setGeneratedReply] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  // Should do API call here
  const handleSubmit = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await axios.post("https://akurtles2-auto-emailer.chickenkiller.com/api/email/generate", {
        emailContent,
        emailTone
      })

      if (response.status !== 200) {
        throw new Error("Failed to generate reply. Please try again.")
      }
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));



    } catch (err) {
      setError("Failed to generate reply. Please try again.")
      console.log(err)
    } finally {
      setLoading(false)
    }
  }



  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: "100vw",
        minHeight: "100vh",
        maxWidth: "100%",
        maxHeight: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f2e64ff',
        overflow: "hidden",
      }}
    >
    <AppBar position="fixed" sx={{ background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Auto Emailer
        </Typography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>

      <Container
        bgcolor='background.paper'
        opacity={0.4}
        maxWidth="md"
        sx={{
          
          borderRadius: 4,
          p: 4,
          // background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.51) 100%)',
          background: 'rgba(255, 255, 255, 1) ',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',

        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Email Reply Generator
        </Typography>

        <Box>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{
              mb: 2,
            }}
          />

          <FormControl fullWidth sx={{ mb: 2, color: 'text.primary' }}>
            <InputLabel id="tone-label">Select Tone (Optional)</InputLabel>
            <Select
              labelId="tone-label"
              value={emailTone || ""}
              onChange={(e) => setEmailTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="formal">Formal</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
            </Select>
          </FormControl>


          <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading || !emailContent} fullWidth>
            {loading ? <CircularProgress size={24} /> : "Generate Reply"}
          </Button>

        </Box>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6" gutterBottom>
              Generated Reply:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply}
              InputProps={{ readOnly: true }}
            />
            <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigator.clipboard.writeText(generatedReply)}>
              Copy to Clipboard
            </Button>
          </Box>
        )}

      </Container>
    </Box>
  )
}

export default App
