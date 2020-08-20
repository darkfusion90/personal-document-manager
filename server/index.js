require('./database').connect().then(setupServer)

function setupServer() {
    const expressApp = require('./app')
    expressApp.listen(8000, () => console.log('Server listening atr port: 8000'))
}


