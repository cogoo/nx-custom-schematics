import { getGreeting } from '../support/app.po';

describe('adoption-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to adoption-ui!');
  });
});
