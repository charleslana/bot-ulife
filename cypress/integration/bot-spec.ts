import BotPo from '../variables/bot-po';
import {config} from '../config';

describe('Bot ulife', () => {

    let botPo: BotPo;

    beforeEach(() => {
        botPo = new BotPo();
        cy.visit(botPo.ulr);
    });

    it('Open ulife with authenticate and open zoom', () => {
        cy.url().should('include', botPo.ulr);
        cy.get(botPo.buttonLogin).should('be.visible');
        cy.get(botPo.inputLogin).type(config.USER_RA, {log: false});
        cy.get(botPo.inputPassword).type(config.USER_PASSWORD, {log: false});
        cy.get(botPo.buttonLogin).click();
        cy.url().should('equal', botPo.urlRedirect);
        cy.visit(botPo.urlCalendar);
        cy.get(botPo.studentTitle).should('be.visible');
        cy.get(botPo.buttonVirtualClass).first().click();
    });
});