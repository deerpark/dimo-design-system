const fs = require('fs')
const path = require('path')

const packageJson = require('./package.json')
const versionJsonPath = path.join(__dirname, 'src', 'version.json')

const versionJson = {
  version: packageJson.version,
}

fs.writeFileSync(versionJsonPath, JSON.stringify(versionJson, null, 2))

console.log(`Updated version.json to version ${packageJson.version}`)
