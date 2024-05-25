## Plotter Express Server

### Notes

- This repo works with **convert-svg-to-gcode** package. But it is not published as npm package you have to install it manually.

1. Clone the **convert-svg-to-gcode** package `git clone https://github.com/antinucleus/convert-svg-to-gcode`.
2. Change directory to **convert-svg-to-gcode** with this command: `cd convert-svg-to-gcode`.
3. This project was written in the typescript language. Therefore, it requires tsc (typescript compiler) for compilation. To install it globally run this command `npm install -g tsc`.
4. If you use npm run `npm install`. (Also you can get information and follow instructions of this repo from https://github.com/antinucleus/convert-svg-to-gcode).
5. After that copy the SVG file you want to convert to **convert-svg-to-gcode/public** directory. If the file is not there, program will not work.
6. There is `gcode.config.json` file at root directory of the project. You can change the values for your needs. For now, you have to supply `svgFileName`. Change this field to the same filename that you copied the svg file into **convert-svg-to-gcode/public**.
7. Only once you should run the program for creating `dist` folder. Run `npm run start`.
8. Run `cd ..`.
9. Now you can install this package into **plotter-express-server** locally like below:

- Assume that you created `project` directory and cloned `convert-svg-to-gcode package` and `plotter-express-server` into this directory. It will be look like that:

```bash

   --/project
        |
        |__ /convert-svg-to-gcode
        |
        |__ /plotter-express-server
```

- Change directory to **plotter-express-server** with this command: `cd plotter-express-server`.
- You can install the **convert-svg-to-gcode** packge with this command: `npm install ../convert-svg-to-gcode`.
- After that you can run the server `node index.js`.
