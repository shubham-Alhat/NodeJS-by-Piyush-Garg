## Node JS

<hr>

**Node JS is javascript run time environment.**
whenever we run `npm init`. it creates **package.json** file.

_this file is actually to maintain our package we going to use in our project._

**All other features which is present for browser are remove and added new feature to run JS locally on system.**

<hr>

### `require` in Node js.

It actually used in node js when we have import any module _(file)_ from our project files.

**Check out file `module.js` and `math.js`**

there `require` is used to access file or module or package. and `module.exports = {}` is used to export values from module to needed file.

## I didnt get suggestions of node packages

✅ Fix IntelliSense for require() in .js files:

1. Install Node.js type definitions
   If you haven’t already:

```bash
npm install --save-dev @types/node
```

2. Create a jsconfig.json in your root directory
   This tells VS Code:

Hey, this is a JavaScript project that uses Node.js types.

Create this file: jsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "checkJs": true,
    "allowJs": true,
    "types": ["node"]
  },
  "include": ["./**/*.js"]
}
```
