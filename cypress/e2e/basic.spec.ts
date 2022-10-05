context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('前端示例代码库')
      .should('exist')

    cy.screenshot('index page')
  })

  it('switch display', () => {
    cy.get('[data-example="clip-path 裁剪图形"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/example/clip-path')

    cy.get('.example-showcase')
      .should('exist')

    cy.get('[title="切换显示"]')
      .click()
      .get('.example-showcase')
      .should('not.exist')

    cy.get('.close-handler')
      .click()
      .get('aside')
      .should('have.class', '!w-0')
  })

  it('show source code', () => {
    cy.get('[data-example="clip-path 裁剪图形"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/example/clip-path')

    cy.get('[i-carbon-code=""]')
      .click()
      .get('.prism-editor-wrapper')
      .should('not.be.hidden')
  })
})
