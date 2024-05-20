// test github

// simple p2p chat with PeerJS
const peer = new Peer();
let conn = null

peer.on('open', function (id) {
    console.log('My peer ID is: ' + id)
})

document.getElementById('connectButton').addEventListener('click', function () {
    const peerId = document.getElementById('peerIdInput').value
    conn = peer.connect(peerId)
    conn.on('open', function () {
        conn.on('data', function (data) {
            document.getElementById('messages').value += 'Họ: ' + data + '\n'
        })
    })
})

document.getElementById('sendButton').addEventListener('click', function () {
    const message = document.getElementById('messageInput').value
    document.getElementById('messages').value += 'Bạn: ' + message + '\n'
    conn.send(message)
})

peer.on('connection', function (connection) {
    conn = connection
    conn.on('data', function (data) {
        document.getElementById('messages').value += 'Họ: ' + data + '\n'
    })
})