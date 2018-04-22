# node-git-current-branch
Get the current git branch name using Node.js

## Install

```bash
npm install node-git-current-branch --save
```
## Usage

```javascript
const getCurrentBranchName = require('node-git-current-branch');
getCurrentBranchName();
```

## API

### getCurrentBranchName([path]);
Returns branch name or false

##### path
Type: `string`

Default: `process.cwd()`

The root path which you init your git repository.
