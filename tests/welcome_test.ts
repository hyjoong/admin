Feature("dashboard");

Scenario("Visit the Main page", ({ I }) => {
  I.amOnPage("/");
  I.see("대시보드");
});
