//const {app, BrowserWindow} = require('electron')

var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
const path = require('path');
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    fullscreen: false,
    resizable: true,
    movable: true,
    alwaysOnTop: false,
    title: 'Infonet HyperText',
    transparent: false,
    fullscreenable: true,
    titleBarStyle: 'hidden',
    autoplayPolicy: 'no-user-gesture-required',
    center: true,
    backgroundThrottling: false,
    frame: false,
    icon: path.join(__dirname + '/Icon/icon.ico'), /*icns for mac! 512x512*/
    show: false, //Just don't show it yet
    webPreferences: {
      webSecurity: true,
      preload: path.join(__dirname, 'preload.js'),
      // (NOT RECOMMENDED)
      // If true, we can skip attaching functions from ./menu-functions.js to window object in preload.js.
      // And, instead, we can use electron APIs directly in renderer.js
      // From Electron v5, nodeIntegration is set to false by default. And it is recommended to use preload.js to get access to only required Node.js apis.
      //nodeIntegration: true, //Yes this is bad, no i don't know how to fix it
      enableRemoteModule: true
    }
  })

  // create a new splash-Window 
  const splashWindow =  new BrowserWindow({
    width: 300,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    movable: true

  });
  splashWindow.loadFile('./app/splash.asar/splash.html');


  mainWindow.loadFile('./app/Data/Pages/main.html')
  // For deploys use asar below
  //mainWindow.loadFile('./app/app.asar/Data/Pages/main.html')
  mainWindow.webContents.openDevTools()
  mainWindow.setMenuBarVisibility(false)
  
  mainWindow.once('ready-to-show', () => {
    splashWindow.destroy();
    mainWindow.show();
  });


}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()

  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

//app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');
//app.commandLine.appendSwitch('disable-site-isolation-trials')

