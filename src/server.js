const { createServer } = require("http");
const app = require("./app");

const server = createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Deu bom na porta ${PORT}`));