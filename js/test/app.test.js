/************************************************************************************
 * Objetivo: Arquivo responsável pelo  Teste Unitário (Unit Test) do arquivo app 
 *           que tem todos os elementos da tela.
 * Data: 24/02/2026
 * Autor Test: Guilherme (pessoa quem fez os testes)
 * Autor Dev: Guilherme (pessoa quem criou as funções)
 * Versão: 1.0
 ***********************************************************************************/


//Import do arquivo a ser realizado os testes unitários
const criacaoDaTela = require('../app.js')

//CENÁRIO DE TESTE 01: Teste de criação dos cursos
test('Validação dos elementos se eles existem:', function(){
    expect(criacaoDaTela.criarCurso)
})