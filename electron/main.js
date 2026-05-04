// Animuslim — Electron main process
// Empaquette l'app HTML en exécutable Windows/Mac/Linux

const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const isDev = process.argv.includes('--dev');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'Animuslim — Les Aventures Islamiques',
    backgroundColor: '#1a0e2e',
    icon: path.join(__dirname, '..', 'assets', 'characters', 'yusuf_joie.png'),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    },
    autoHideMenuBar: !isDev,
    fullscreenable: true,
    show: false
  });

  mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  } else {
    Menu.setApplicationMenu(null);
  }

  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
