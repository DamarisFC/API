import { Router } from "express";
import {
  createAtendimento,
  getAllAtendimentos,
  getAtendimentoById,
  updateAtendimento,
  deleteAtendimento
} from "./../controller/atendimento.controller.js"

const atendimento = Router();

// Rotas para o atendimento
atendimento.post('/criar', createAtendimento)
atendimento.get('/', getAllAtendimentos)
atendimento.get('/atendimento/:id', getAtendimentoById)
atendimento.put('/atualizar/:id', updateAtendimento)
atendimento.delete('/deletar/:id', deleteAtendimento)

export default atendimento
// export default atendimento

