// https://docs.cypress.io/api/introduction/api.html

describe('Vuetiful Goals', () => {
  it('Landing page shows', () => {
    cy.visit('/')
    cy.contains('Vuetiful Goals')
    cy.contains('Goals')
    cy.contains('Add Goal')
  })
  it('Goal entry form shows', () => {
    cy.visit('/goals/entry')
    cy.contains('Goal')
  })
})
