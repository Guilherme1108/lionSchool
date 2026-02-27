/************************************************************************************
 * Objetivo: Arquivo responsável pelo  Teste Unitário (Unit Test) do arquivo api
 *           onde realiza todas as requisições
 * Data: 26/02/2026
 * Autor Test: Guilherme (pessoa quem fez os testes)
 * Autor Dev: Guilherme (pessoa quem criou as funções)
 * Versão: 1.0
 ***********************************************************************************/

//Import do arquivo a ser realizado os testes unitários
const requisicoes = require('../api.js')

//CENÁRIO DE TESTE 01: Teste de requisição dos cursos
test('Validação dos elementos se eles existem:', async function () {
    const resultado = await requisicoes.getCourses()
    expect(Array.isArray(resultado)).toBe(true)
})