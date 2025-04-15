import UsernameInput from '../components/UsernameInput'

interface LoginProps {
    setUsername: (name: string) => void
    setCanEnterGame: (canEnter: boolean) => void
}

const LoginScreen = ({ setUsername, setCanEnterGame }: LoginProps) => {
    return (
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Bem-vindo ao Seega</h1>
            <UsernameInput setUsername={setUsername} setCanEnterGame={setCanEnterGame} />
        </div>
    )
}

export default LoginScreen
