const GameBoard = () => {
    const rows = 5
    const cols = 5
    const grid = Array.from({ length: rows * cols })

    return (
        <div className="grid grid-cols-5 gap-1 w-[400px] h-[400px] bg-gray-300 p-1 rounded">
            {grid.map((_, index) => (
                <div
                    key={index}
                    className="bg-white w-full aspect-square flex items-center justify-center border border-gray-400"
                >
                    {/* Aqui depois colocamos a peça */}
                </div>
            ))}
        </div>
    )
}


export default GameBoard
