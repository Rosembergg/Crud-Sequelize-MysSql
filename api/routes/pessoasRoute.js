const { Router } = require ('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()
//GET trazer registros
router.get('/pessoas', PessoaController.pegaTodasAsPessoas) 

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
//POST criar registros
router.post('/pessoas', PessoaController.criarPessoa)
//Atulizar registros
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
//delete apaga registros
router.delete('/pessoas/:id',PessoaController.deletarPessoa)
//pesquisa Matricula
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
//Cria matricula
router.post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
//atualiza matricula
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
//deletar matricula
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula)

module.exports = router