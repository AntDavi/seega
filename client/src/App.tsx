import { useState } from 'react'
import GameScreen from './pages/Game'
import LoginScreen from './pages/Login'

function App() {
  const [username, setUsername] = useState('')
  const [canEnterGame, setCanEnterGame] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {canEnterGame ? (
        <GameScreen username={username} />
      ) : (
        <LoginScreen setUsername={setUsername} setCanEnterGame={setCanEnterGame} />
      )}
    </div>
  )
}

export default App
