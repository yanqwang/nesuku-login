
#Nesuku-login
Log in and Sign up function for Nesuku App

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTutorial tutorial
```

Then, to run it, cd into `myTutorial` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

## File Structure of the App

```
├─ resources
│  ├─ android
│  │  ├─ icon
│  │  │  ├─ drawable-hdpi-icon.png
│  │  │  ├─ drawable-ldpi-icon.png
│  │  │  ├─ drawable-mdpi-icon.png
│  │  │  ├─ drawable-xhdpi-icon.png
│  │  │  ├─ drawable-xxhdpi-icon.png
│  │  │  └─ drawable-xxxhdpi-icon.png
│  │  └─ splash
│  │     ├─ drawable-land-hdpi-screen.png
│  │     ├─ drawable-land-ldpi-screen.png
│  │     ├─ drawable-land-mdpi-screen.png
│  │     ├─ drawable-land-xhdpi-screen.png
│  │     ├─ drawable-land-xxhdpi-screen.png
│  │     ├─ drawable-land-xxxhdpi-screen.png
│  │     ├─ drawable-port-hdpi-screen.png
│  │     ├─ drawable-port-ldpi-screen.png
│  │     ├─ drawable-port-mdpi-screen.png
│  │     ├─ drawable-port-xhdpi-screen.png
│  │     ├─ drawable-port-xxhdpi-screen.png
│  │     └─ drawable-port-xxxhdpi-screen.png
│  ├─ ios
│  │  ├─ icon
│  │  │  ├─ icon-40.png
│  │  │  ├─ icon-40@2x.png
│  │  │  ├─ icon-40@3x.png
│  │  │  ├─ icon-50.png
│  │  │  ├─ icon-50@2x.png
│  │  │  ├─ icon-60.png
│  │  │  ├─ icon-60@2x.png
│  │  │  ├─ icon-60@3x.png
│  │  │  ├─ icon-72.png
│  │  │  ├─ icon-72@2x.png
│  │  │  ├─ icon-76.png
│  │  │  ├─ icon-76@2x.png
│  │  │  ├─ icon-83.5@2x.png
│  │  │  ├─ icon-small.png
│  │  │  ├─ icon-small@2x.png
│  │  │  ├─ icon-small@3x.png
│  │  │  ├─ icon.png
│  │  │  └─ icon@2x.png
│  │  └─ splash
│  │     ├─ Default-568h@2x~iphone.png
│  │     ├─ Default-667h.png
│  │     ├─ Default-736h.png
│  │     ├─ Default-Landscape-736h.png
│  │     ├─ Default-Landscape@2x~ipad.png
│  │     ├─ Default-Landscape@~ipadpro.png
│  │     ├─ Default-Landscape~ipad.png
│  │     ├─ Default-Portrait@2x~ipad.png
│  │     ├─ Default-Portrait@~ipadpro.png
│  │     ├─ Default-Portrait~ipad.png
│  │     ├─ Default@2x~iphone.png
│  │     └─ Default~iphone.png
│  ├─ icon.png
│  └─ splash.png
├─ src
│  ├─ app
│  │  ├─ app.component.ts
│  │  ├─ app.html
│  │  ├─ app.module.ts
│  │  ├─ app.scss
│  │  └─ main.ts
│  ├─ assets
│  │  └─ icon
│  │     └─ favicon.ico
│  ├─ pages
│  │  ├─ hello-ionic
│  │  │  ├─ hello-ionic.html
│  │  │  ├─ hello-ionic.scss
│  │  │  └─ hello-ionic.ts
│  │  ├─ item-details
│  │  │  ├─ item-details.html
│  │  │  ├─ item-details.scss
│  │  │  └─ item-details.ts
│  │  └─ list
│  │     ├─ list.html
│  │     ├─ list.scss
│  │     └─ list.ts
│  ├─ theme
│  │  └─ variables.scss
│  ├─ index.html
│  ├─ manifest.json
│  └─ service-worker.js
├─ .editorconfig
├─ .gitignore
├─ README.md
├─ config.xml
├─ ionic.config.json
├─ package.json
├─ tsconfig.json
└─ tslint.json
```

