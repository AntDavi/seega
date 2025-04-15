import GameBoard from "../components/GameBoard"
import Sidebar from "../components/Sidebar"

interface GameScreenProps {
    username: string
}

const GameScreen = ({ username }: GameScreenProps) => {
    return (
        <div className="flex w-full h-screen">
            <div className="flex-1 flex items-center justify-center bg-green-50">
                <GameBoard />
            </div>
            <Sidebar username={username} />
        </div>
    )
}

export default GameScreen
