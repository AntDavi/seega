import { useState } from 'react'
import { socket } from '../lib/socket'

interface Props {
    setUsername: (name: string) => void
    setCanEnterGame: (canEnter: boolean) => void
}

const UsernameInput = ({ setUsername, setCanEnterGame }: Props) => {
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = () => {
        if (!name.trim()) return

        socket.emit('join', name)

        socket.on('join_success', () => {
            setUsername(name)
            setCanEnterGame(true)
        })

        socket.on('room_full', () => {
            setError('A sala já está cheia. Tente novamente mais tarde.')
        })
    }

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
                onClick={handleSubmit}
            >
                Entrar
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
    )
}

export default UsernameInput
