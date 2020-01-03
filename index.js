const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const ffmpeg = require('./tool')
function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // 加载index.html文件
    win.loadFile('index.html')
}
ipcMain.on('video', (event, arg) => {
    ffmpeg.ffmpeg(arg.videoPath, arg.savePath, 'aaaa')
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.returnValue = 'pong'
})
app.on('ready', createWindow)