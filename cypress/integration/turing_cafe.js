beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

describe('Turing Cafe', () => {
  it('Should be able to view the page and title, form, and all previous reservation', () => {
    cy.contains("Turing Cafe Reservations")
    cy.get(".reservation-form").children('form')
    cy.get(".reservation-container").children('.resy-container').children('.reservation-card')
  })

})