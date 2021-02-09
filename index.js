const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if (err) throw err;
      // Content type
      res.writeHead(200, { "Content-Type": "text/html"});
      res.end(content);
    });
  }

  if (req.url === '/api/users') {
    const users = [
      { name: 'Bob Smith', age: 40 },
      { name: 'Sally Smith', age: 35 }
    ];
    res.writeHead(200, { "Content-Type": "application/json"});
    res.end(JSON.stringify(users));
  }
});

// when deployed, host will decide which port to run on in an environment variable(pocess.env.PORT), so we want to listen for that variable, or run on 5000.
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

//create an npm script for nodemon (live updating) because we did not install nodemon globally. (npm run dev)
