const urls = [
  'docs/core-concepts',
  'docs/intro',
  'docs/debug'
]

const baseUrl = 'https://playwright.dev'

describe('Visual Regression', () => {
  for (const path of urls) {
    it(`Visual regression - ${path}`, () => {
      cy.viewport(1280, 1162);
      cy.visit(`${baseUrl}/${path}`)
      cy.document().matchImageSnapshot();
    })
  }
})