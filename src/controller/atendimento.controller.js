import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createAtendimento = async (req, res) => {
    const {
      idEncaminhamento,
      observacoes,
      data,
      status_atendimento
    } = req.body
  try {
    const atendimento = await prisma.atendimento.create({
      data: req.body
    })
    res.status(201).json(atendimento)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getAllAtendimentos = async (req, res) => {
  try {
    const atendimentos = await prisma.atendimento.findMany()
    res.status(200).json(atendimentos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getAtendimentoById = async (req, res) => {
  try {
    const atendimento = await prisma.atendimento.findUnique({
      where: { id: req.params.id }
    })
    if (!atendimento) {
      return res.status(404).json({ error: 'Atendimento não encontrado' })
    }
    res.status(200).json(atendimento)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateAtendimento = async (req, res) => {
  try {
    const atendimento = await prisma.atendimento.update({
      where: { id: req.params.id },
      data: req.body
    })
    res.status(200).json(atendimento)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteAtendimento = async (req, res) => {
  try {
    await prisma.atendimento.delete({
      where: { id: req.params.id }
    })
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}