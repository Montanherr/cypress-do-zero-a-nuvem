describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
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

it.only('marca o tipo de atendimento "Feedback"', () => {
   cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked')
})

it.only('marca um meio de contato "Telefone"', () => {
  cy.get('input[type="radio"][value="phone"]')
  .check()
  .should('be.checked')
})

})