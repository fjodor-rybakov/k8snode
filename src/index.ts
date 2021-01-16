import {fastify} from "fastify";
import * as fs from "fs";
import * as path from "path";

const server = fastify({
  logger: true,
  http2: true,
  https: {
    key: fs.readFileSync(path.join(process.cwd(), 'https', 'fastify.key')),
    cert: fs.readFileSync(path.join(process.cwd(), 'https', 'fastify.cert')),
    allowHTTP1: true
  },
});

server.get("/", (request, reply) => {
  reply.send({
    message: "Hello from k8s"
  });
});

server.listen(3000, "0.0.0.0", (err) => {
  if (err) {
    throw err;
  }
});