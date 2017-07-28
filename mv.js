const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

promisify(fs.readdir)('.').then(files => {
  files.forEach(file => {
    const name = path.parse(file).name
    fs.mkdirSync(name)
    fs.renameSync(file, `./${name}/${file}`)
  })
})