export const createBody = (price) => {
    return {
        "time": {
            "updated": "Sep 20, 2024 15:47:38 UTC",
            "updatedISO": "2024-09-20T15:47:38+00:00",
            "updateduk": "Sep 20, 2024 at 16:47 BST"
        },
        "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
        "chartName": "Bitcoin",
        "bpi": {
            "USD": {
            "code": "USD",
            "symbol": "&#36;",
            "rate": "63,313.513",
            "description": "United States Dollar",
            "rate_float": price
            }
        }
    }
}