{
  "name": "node-hello",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest --coverage"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/johnpapa/node-hello.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/johnpapa/node-hello/issues"
  },
  "homepage": "https://github.com/johnpapa/node-hello#readme",
  "devDependencies": {
    "jest": "^29.7.0"
  },
  "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": [
      "/node_modules/"
    ]
  }
}
