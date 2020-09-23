/*const { remote } = require('electron');
let win = remote.getCurrentWindow();

document.getElementById('min-btn').addEventListener('click', function() {
    win.minimize();
})

document.getElementById('max-btn').addEventListener('click', function() {
    if(win.isMaximized()){
        win.unmaximize();
    }else{
        win.maximize();
    }
})

document.getElementById('close-btn').addEventListener('click', function() {
    win.close();
})*/
document.getElementById('min-btn').addEventListener('click', function() {
    winMinimize();
})

document.getElementById('max-btn').addEventListener('click', function() {
    winMaximize();
})

document.getElementById('close-btn').addEventListener('click', function() {
    winClose();
})