beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('Turing Cafe', () => {
  it('Should be able to view the page and title, form, and all previous reservation', () => {
    cy.contains("Turing Cafe Reservations")
    cy.get(".reservation-form").children('.form-container')
    cy.get(".reservation-container").children('.resy-container').children('.reservation-card')
  })

  it("user should be able to fill out the form name input", () => {
        cy.get('input[name="name"]').type('Bryan')
        .should('have.value', "Bryan")
    })
  it("user should be able to fill out the form date input", () => {
        cy.get('input[name="date"]').type('09/13')
        .should('have.value', '09/13')
  })
  it("user should be able to fill out the form time input", () => {
        cy.get('input[name="time"]').type('3:00')
        .should('have.value', '3:00')
  })
  it("user should be able to fill out the form number input", () => {
        cy.get('input[name="number"]').type('7')
        .should('have.value', '7')
  })

  it('Should be able click Make Reservation button and see the new reservation added to page', () => {
    cy.get('input[name="name"]')
        .type('Bryan')
        .should('have.value', 'Bryan')
        .get('input[name="date"]')
        .type('09/13')
        .should('have.value', '09/13')
        .get('input[name="time"]')
        .type('11:00')
        .should('have.value', '11:00')
        .get('input[type="number"]')
        .type(7)
        .should('have.value', 7)
      cy.get('.submit-button').click()
  })

})
