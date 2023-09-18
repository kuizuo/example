import Showcase from './Showcase.vue'

describe('<Showcase />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Showcase)
  })
})
