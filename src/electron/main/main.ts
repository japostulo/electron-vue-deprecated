import { join } from "path";
import { app, BrowserWindow, protocol } from "electron";

const isDev: boolean = process.env.npm_lifecycle_event === "serve" ? true : false;

const fileProtocol: string = "@/";

const appDevURL: string = 'http://127.0.0.1:8080'

protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: {
      secure: true,
      standard: true,
    },
  },
]);

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 768,
    fullscreen: !isDev,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      // preload: join(__dirname, "../../preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(
    isDev ? appDevURL : join(__dirname, "../../index.html")
  );

  mainWindow.setTitle("Karaokê");

  // Open the DevTools.
  if (isDev) mainWindow.webContents.openDevTools();
  else mainWindow.setMenu(null);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  protocol.registerFileProtocol(fileProtocol, (request, callback) => {
    const regex: RegExp = new RegExp(`^${fileProtocol}:\/\/`);
    const url: string = request.url.replace(regex, "");
    console.log({ url });
    try {
      return callback(decodeURI(url));
    } catch (error) {
      console.error(
        `ERROR: registerLocalResourceProtocol: Could not get file path: ${error}`
      );
    }
  });

  createWindow();

  app.on("activate", function (): void {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", (): void => {
  if (process.platform !== "darwin") app.quit();
});
