import service from "../src/service.js";
import axios from "axios";
import { jest } from '@jest/globals'
import { createBody } from "./mocks.js";

jest.mock("axios");

axiosMockFetchPriceWithValue = (price) => {
    axios.get.mockResolvedValue({ data: createBody(price) });
}

describe('Service bitcoin - Mocking Axios', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should go to the moon when is above to limit', () => {
        axiosMockFetchPriceWithValue(70001);
        expect(service.isGoingToTheMoon()).resolves.toBe(true);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('should not go to the moon when is above to limit', () => {
        axiosMockFetchPriceWithValue(69999);
        expect(service.isGoingToTheMoon()).resolves.toBe(false);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('should not go to the moon when is equal to limit', () => {
        axiosMockFetchPriceWithValue(70000);
        expect(service.isGoingToTheMoon()).resolves.toBe(false);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
});