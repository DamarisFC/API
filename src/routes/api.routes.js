import { Router } from "express";
import MaeSoloController from "./../controller/api.controllers.js"
import {
  createAtendimento,
  getAllAtendimentos,
  getAtendimentoById,
  updateAtendimento,
  deleteAtendimento
} from "./../controller/atendimento.controller.js"

const maeSolo = Router();

// Rotas para o atendimento
const router = Router()
router.post('/', createAtendimento)
router.get('/', getAllAtendimentos)
router.get('/:id', getAtendimentoById)
router.put('/:id', updateAtendimento)
router.delete('/:id', deleteAtendimento)

maeSolo.post("/cadastrarMae", MaeSoloController.criarMaeSolo);

export default maeSolo;