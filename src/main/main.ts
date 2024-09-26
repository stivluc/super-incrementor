import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
  const preloadPath = path.join(__dirname, 'preload.js');
  console.log('Preload script path:', preloadPath);

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: path.join(__dirname, 'assets', 'app-icon.ico'), // Set the icon path
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegrationInWorker: true,
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
  
  try {
    const nativeBackendPath = path.join(__dirname, 'native_backend.node');
    console.log('Main process: Attempting to load native backend from:', nativeBackendPath);
    const nativeBackend = require(nativeBackendPath);
    console.log('Main process: Native backend loaded successfully:', nativeBackend);
  } catch (error) {
    console.error('Main process: Error loading native backend:', error);
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
