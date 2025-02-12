describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visite(); // Usa o comando personalizado
  })
  it('verifica o titulo da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

it('Seleciona um produto (Youtube) por seu texto', () => (
  cy.get('#product')  // Wait up to 10 seconds for the element
  .select('YouTube')
  .should('have.value', 'youtube')
))

it('Seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
})

it.only('selecione um produto (blog) por seu indice', () => {
  cy.get('#product')
  .select(1)
  .should('have.value', 'blog')
})

it.only('marca o tipo de atendimento', () => {
   cy.get('input[type="radio"]')
    .each(typeOfService => {
      cy.wrap(typeOfService)
        .check()
        .should('be.checked')
    })
})

it.only('marca ambos checkboxes, depois desmarca o último', () => {
  cy.get('input[type="checkbox"').check()
  .should('be.checked')
  .last()
  .uncheck()
  .should("not.be.checked")
})

it.only('Seleciona um arquivo da pasta fixtures', () => {
  cy.get('#file-upload')
  .selectFile('cypress/fixtures/example.json')
  .should(input => {
      expect(input[0].files[0].name).to.equal('example.json')
  })
})

/// teste mais avançados com o sypress.

it('exibe a mensagem por 3 segundos', function () {
  cy.clock()

  // (...) // ação que dispara algo que exibe uma mensagem por três segundos.

  // (...) // verificação que a mensagem está visível

  cy.tick(3000) // avança o relógio treês segundos (em milissegundos).

  // (...) // verificação de que a mensagem não está mais vísivel.
})
})