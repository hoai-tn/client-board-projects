describe("Client Projects Table", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("STORYBOOK_PATH")}&id=client-projects-table--primary`);
    })

    it("should display fields table", () => {
        headFields.forEach((item, index) => {
          cy.get(`table>thead>tr>:nth-child(${index + 1}) span`).contains(
            item.label
          );
        });
      });
      it("should show Client Open Projects data on the table", () => {
        cy.get("#text-area-test-data")
          .invoke("val")
          .should((text) => {
            expect(text).to.equal(
              '[{"id":"1","name":"Max","specialty":"Caterer","email":"xx@gmail.com","phoneNumber":"33-333442","costRate":15,"markup":20},{"id":"2","name":"Alex","specialty":"Cook","email":"bb@gmail.com","phoneNumber":"13-333442","costRate":50,"markup":20},{"id":"3","name":"TOM","specialty":"Project Manager","email":"aa@gmail.com","phoneNumber":"23-333442","costRate":25,"markup":30}]'
            );
          });
      });
});
