describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[id="mail"]').type('aaa')
    cy.get('input[id="password"]').type('aaa')
     cy.get('input[id="submit"]').click()
     cy.contains('Home')

    cy.visit('http://localhost:3000/')
    cy.get('input[id="mail"]').type('aaa')
    cy.get('input[id="password"]').type('aaaeeee')
    cy.get('input[id="submit"]').click()
    cy.contains('サインインに失敗しました。')
  })
})