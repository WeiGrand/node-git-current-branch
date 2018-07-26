/**
 * Created by heweiguang on 2018/4/21.
 */

const fs = require('fs');
const path = require('path');

module.exports = function getCurrentBranchName(p = process.cwd()) {
  const gitHeadPath = `${p}/.git/HEAD`;

  return fs.existsSync(p) ?
      fs.existsSync(gitHeadPath) ?
          fs.readFileSync(gitHeadPath, 'utf-8').trim().split('/')[2] :
          getCurrentBranchName(path.resolve(p, '..')) :
      false
};
