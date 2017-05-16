module.exports = [

  // 1. replace single file with local one
    {
        pattern: 'bundle-2.2.17.js', // Match url you wanna replace
        responder: "/home/blackmiaool/github/blackmiaoolreact/test/CR/server/public/bundle/bundle.js"
  },
    {
        pattern: 'react.min.js', // Match url you wanna replace
        responder: "/home/blackmiaool/github/blackmiaoolreact/test/CR/server/public/bundle/bundle.js"
  },
]