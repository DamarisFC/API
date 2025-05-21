import express from "express";
import { logEvents, logger } from "./middlewares/logger.midleware.js"
import dotenv from "dotenv"
import maeSolo from "./routes/maeSolo.routes.js";
import profissional from "./routes/profissionalApoio.route.js";
import disponibilidade from "./routes/disponibilidade.route.js";
import atendimento from "./routes/atendimento.routes.js";


dotenv.config();

const app = express();
const PORT = 3000;

app.use(logger);
app.use(express.json());

app.use("/mae-solo", maeSolo);
app.use("/profissional", profissional);
app.use("/disponibilidade", disponibilidade);
app.use("/atendimento", atendimento);

app.listen(PORT, async () => {
    logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
});
