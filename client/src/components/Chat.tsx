import { useEffect, useState } from 'react'
import { socket } from '../lib/socket'

interface ChatProps {
    username: string
}

interface Message {
    sender: string
    text: string
}

const Chat = ({ username }: ChatProps) => {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')

    const sendMessage = () => {
        if (!input.trim()) return

        const msg = { sender: username, text: input }
        socket.emit('send_message', msg)
        setInput('')
    }

    useEffect(() => {
        socket.on('receive_message', (msg: Message) => {
            setMessages((prev) => [...prev, msg])
        })

        return () => {
            socket.off('receive_message')
        }
    }, [])

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-2 mb-4">
                {messages.map((msg, idx) => (
                    <div key={idx} className="p-2 bg-gray-100 rounded">
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex space-x-2">
                <input
                    className="flex-1 border rounded px-2 py-1"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    onClick={sendMessage}
                >
                    Enviar
                </button>
            </div>
        </div>
    )
}

export default Chat
