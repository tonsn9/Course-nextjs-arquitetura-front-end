import { sum } from "./sum";

// Descrever que existe um senário de teste para a nossa função
describe("sum()", () => {
  it("when receives 1 and 1, returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
