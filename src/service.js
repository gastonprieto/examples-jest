import { fetchPrice } from "./bitcoinApi.js";

const TO_MOON_THRESHOLD = 70000;

export default {
    isGoingToTheMoon: () => { return fetchPrice().then(price => price > TO_MOON_THRESHOLD); }
}