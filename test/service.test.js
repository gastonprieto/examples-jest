import service from "../src/service";

describe('Service Tests', () => {
    test('should do something', () => {
        expect(service.isGoingToTheMoon()).resolves.toBe(true);
    });
});