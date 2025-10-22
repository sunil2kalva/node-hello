const http = require('http');

describe('Node Hello Server', () => {
  let server;
  const port = 3001; // Use different port for testing

  beforeAll((done) => {
    // Start server before tests
    server = http.createServer((req, res) => {
      res.statusCode = 200;
      const msg = 'Hello Node!\n';
      res.end(msg);
    });
    server.listen(port, done);
  });

  afterAll((done) => {
    // Close server after tests
    server.close(done);
  });

  test('should return 200 status code', (done) => {
    http.get(`http://localhost:${port}`, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  test('should return "Hello Node!" message', (done) => {
    http.get(`http://localhost:${port}`, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        expect(data).toBe('Hello Node!\n');
        done();
      });
    });
  });

  test('server should be listening on the correct port', () => {
    const address = server.address();
    expect(address.port).toBe(port);
  });
});
