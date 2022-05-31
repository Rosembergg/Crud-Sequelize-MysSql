const res = require('express/lib/response')
/* const { where } = require('sequelize/types') */
const database = require('../models')

//mostrar todas as pessoas
class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    // mostrar um pessoa
    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //criar
    static async criarPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //atualizar
    static async atualizarPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //deletar
    static async deletarPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `ID ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId)
            , estudante_id: Number(estudanteId) } })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarMatricula(req, res) {
        const {estudanteId} =req.params
        const novaMatricula = {...req.body, estudante_id: Number(estudanteId)}
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        console.log(estudanteId)
        console.log(matriculaId)
        
        try {
            await database.Matriculas.update(novasInfos, { where: { id: Number(matriculaId) 
            , estudante_id: Number(estudanteId)} })
            const MatriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matriculaId) } })
            return res.status(200).json(MatriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        } 
    }

    static async deletarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        console.log(estudanteId)
        console.log(matriculaId)
        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId) } })
            return res.status(200).json({ message: `ID ${matriculaId} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    
}

module.exports = PessoaController