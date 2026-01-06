export const mockPortfolio = {
  client: {
    name: "Simon N.",
    baseCurrency: "GBP"
  },

  policies: [
    {
      id: "pension",
      name: "International Pension",
      provider: "Ardan",
      currency: "EUR",
      value: 1180000,
      holdings: [
        { name: "Global Equity Fund", assetClass: "Equity", value: 720000 },
        { name: "Global Bond Fund", assetClass: "Fixed Income", value: 340000 },
        { name: "Cash", assetClass: "Cash", value: 120000 }
      ]
    },
    {
      id: "investment",
      name: "Investment Account",
      provider: "Investors Trust",
      currency: "USD",
      value: 820000,
      holdings: [
        { name: "US Equity Fund", assetClass: "Equity", value: 520000 },
        { name: "Property Fund", assetClass: "Alternatives", value: 300000 }
      ]
    },
    {
      id: "isa",
      name: "ISA",
      provider: "Quilter",
      currency: "GBP",
      value: 430000,
      holdings: [
        { name: "UK Equity Fund", assetClass: "Equity", value: 310000 },
        { name: "Bond Fund", assetClass: "Fixed Income", value: 120000 }
      ]
    }
  ]
};
