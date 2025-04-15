import Chat from "./Chat"

interface SidebarProps {
    username: string
}

const Sidebar = ({ username }: SidebarProps) => {
    const handleQuit = () => {
        const confirmed = confirm('Tem certeza que deseja desistir da partida?')
        if (confirmed) {
            // Aqui futuramente pode emitir evento de socket
            window.location.reload()
        }
    }

    return (
        <div className="w-[300px] bg-white p-4 shadow-inner border-l flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Chat</h2>
                <button
                    onClick={handleQuit}
                    className="text-sm text-red-600 hover:underline"
                >
                    Desistir
                </button>
            </div>
            <Chat username={username} />
        </div>
    )
}


export default Sidebar
