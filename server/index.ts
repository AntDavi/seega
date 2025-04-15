import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
})

type Player = {
    id: string
    name: string
}

let players: Player[] = []

io.on('connection', (socket) => {
    console.log(`🟢 ${socket.id} conectou`)

    socket.on('join', (name: string) => {
        if (players.length >= 2) {
            socket.emit('room_full')
            return
        }

        players.push({ id: socket.id, name })
        socket.emit('join_success', players)
        socket.broadcast.emit('player_joined', { id: socket.id, name })

        console.log(`👤 ${name} entrou na partida`)
    })

    socket.on('send_message', (msg: { sender: string; text: string }) => {
        io.emit('receive_message', msg)
    })

    socket.on('disconnect', () => {
        const player = players.find((p) => p.id === socket.id)
        if (player) {
            console.log(`🔴 ${player.name} desconectou`)
            players = players.filter((p) => p.id !== socket.id)
            socket.broadcast.emit('player_left', player)
        }
    })
})

const PORT = 3001
httpServer.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`)
})
