/**
 * Created by heweiguang on 2018/4/21.
 */

const fs = require('fs');

function getCurrentBranchName(rootPath = process.cwd()) {
    try {
        return fs.readFileSync(`${rootPath}/.git/HEAD`, 'utf-8').trim().split('/')[2];
    }catch (e) {
        return false
    }
}

module.exports = getCurrentBranchName;
