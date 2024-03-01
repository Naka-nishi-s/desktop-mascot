const { app, BrowserWindow } = require("electron");
const { join } = require("path");

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, // windowの右上の×アイコンとかを消す
    transparent: true, // 透明化
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
  win.setIgnoreMouseEvents(true); // クリックとかのマウスイベントを無効化
  win.setAlwaysOnTop(true, "screen-saver"); // 常に最上位に表示
  win.setFullScreen(true); // フルスクリーン
};

app.whenReady().then(createWindow);
