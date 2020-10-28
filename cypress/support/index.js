import './google-analytics.commands'
import './session.commands'
import './platform.commands'
Cypress.Commands.add('getIframeBody', (target) => {
  return cy
    .get(target)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
})
