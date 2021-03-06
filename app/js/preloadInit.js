(function() {
	var fs = require('fs');
	var shell = require('shell');
	var ipc = require('electron').ipcRenderer;

	var cssPath = __dirname + '/../css/onenoteStyles/onenote.css';
	var cssData;

	var remote = require('remote');
	var BrowserWindow =  remote.require('browser-window');

	fs.readFile(cssPath, 'utf-8', function(err, data) {
		if (err) console.log(err);
		cssData = data;
		window.cssData = cssData;
		console.log("set data");
	});

	window.electronWindowSetup = function() {
		var webView = document.getElementById("onenote-webview");
		webView.addEventListener('did-stop-loading', function(event) {
			webView.insertCSS(window.cssData);
		});

		webView.addEventListener('did-navigate', function(event){	
			webView.insertCSS(window.cssData);
		});

		webView.addEventListener('new-window', function(event) {
			shell.openExternal(event.url);
		});

		document.getElementById('openConsoleBtn').addEventListener('click', function(event) {
			BrowserWindow.getFocusedWindow().webContents.openDevTools();
		});

		document.getElementById('min-btn').addEventListener('click', function(event) {
			BrowserWindow.getFocusedWindow().minimize();
		});

		document.getElementById('max-btn').addEventListener('click', function(event) {
			BrowserWindow.getFocusedWindow().maximize();
		});

		// use an IPC for this one so we can get the window state and save it to a file before it closes
		document.getElementById('close-btn').addEventListener('click', function(event) {
			ipc.send('appClose');
		});
	}
})();