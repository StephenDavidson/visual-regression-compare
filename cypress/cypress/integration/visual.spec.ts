const urls = [
  'docs/core-concepts',
  'docs/intro',
  'docs/debug'
]

const baseUrl = 'https://playwright.dev'

describe('Visual Regression', () => {
  for (const path of urls) {
    it(`Visual regression - ${path}`, () => {
      cy.visit(`${baseUrl}/${path}`)
      cy.get('.navbar').invoke('css', 'position', 'absolute')
      cy.document().matchImageSnapshot({capture: 'viewport'});
    })
  }
})