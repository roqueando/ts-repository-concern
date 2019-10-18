// lib/server.ts

import app from './app';
const PORT = process.env.PORT || 8080;
// aqui ta mec, só da listen e sobe o server
app.listen(PORT, () => {
    console.log("[SERVER ONLINE] listening:" + PORT);
});