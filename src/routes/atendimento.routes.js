import { Router } from 'express'
import {
  createAtendimento,
  getAllAtendimentos,
  getAtendimentoById,
  updateAtendimento,
  deleteAtendimento
} from './controller.js'

const router = Router()

router.post('/', createAtendimento)
router.get('/', getAllAtendimentos)
router.get('/:id', getAtendimentoById)
router.put('/:id', updateAtendimento)
router.delete('/:id', deleteAtendimento)

export default router