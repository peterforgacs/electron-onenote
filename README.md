#One Note Electron Wrapper

##Please note: This is only a wrapper for the one note web client.
##The wrapper is based on https://github.com/GeordieP/ work!

The One Note desktop client is not avalible on Linux. You can use this wrapper as a desktop client for your notes without having to clutter you browser.

ElectroOneNote supports custom stylesheets. To change the stylesheet, replace `onenote.css` in `[install directory]/resources/app/app/css/onenoteStyles/` and re-start the application. To use the default style, delete or rename `skype.css`.

## To Edit

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository, cd into it
# Install dependencies and run the app
npm install && npm start
```

## To Build
```bash
# run electron-packager in the current directory with appname, platform, arch, and Electron version parameters
electron-packager ./ AppName --platform=win32 --arch=ia32,x64 --version=0.36.0
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#### License [CC0 (Public Domain)](LICENSE.md)
