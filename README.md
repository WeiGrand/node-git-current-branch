# node-git-current-branch
Get the current git branch name using Node.js

## Install

```bash
npm install node-git-current-branch --save
```
## Usage

```javascript
const getCurrentBranchName = require('node-git-current-branch');

getCurrentBranchName(); // branch name or false
```

## API

### getCurrentBranchName([ path ]);

Returns branch name or false

## Props

##### path

Type: `string`

Default: `process.cwd()`

Required: `false`

The path which you want to get it's git repository's branch name.

> Actually you don't need to pass anything, just call the function anywhere inside your git repository.

## CHANGE LOG

`v2.0.x` no longer requires you to pass the **root path which you initialized your git repository**, it will automatically find the branch name if it exists (git initialized).
