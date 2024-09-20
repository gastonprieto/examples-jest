import service from "../src/service";
import { fetchPrice } from '../src/bitcoinApi.js';
import { jest } from '@jest/globals'

jest.mock("../src/bitcoinApi.js");

describe('Service bitcoin - Mocking BitcoinApi', () => {
    test('should go to the moon when is above to limit', () => {
        fetchPrice.mockResolvedValue(70001);
        expect(service.isGoingToTheMoon()).resolves.toBe(true);
    });

    test('should not go to the moon when is above to limit', () => {
        fetchPrice.mockResolvedValue(69999);
        expect(service.isGoingToTheMoon()).resolves.toBe(false);
    });

    test('should not go to the moon when is equal to limit', () => {
        fetchPrice.mockResolvedValue(70000);
        expect(service.isGoingToTheMoon()).resolves.toBe(false);
    });
});