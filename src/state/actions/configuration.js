// SET APP
export const setApp = (app) => (
    {
        type: "SET_APP",
        app
    }
);

// SET CRYPTOS
export const setCryptos = (cryptos) => (
    {
        type: "SET_CRYPTOS",
        cryptos
    }
);

// SET COUNTRIES
export const setCountries = (countries) => (
    {
        type: "SET_COUNTRIES",
        countries,
    }
);

// SET DEPOSIT ADDRESS
export const setDepositAddress = (depositAddress) => (
    {
        type: "SET_DEPOSIT_ADDRESS",
        depositAddress,
    }
);

// SET CURRENCIES
export const setCurrencies = (currencies) => (
    {
        type: "SET_CURRENCIES",
        currencies
    }
);

// SET SIDEBAR ITEM
export const setSidebarItem = (sidebarItem) => (
    {
        type: "SET_SIDEBAR_ITEM",
        sidebarItem
    }
);

// SET SIDEBAR ITEM
export const setAutoTrade = (autoTrade) => (
    {
        type: "SET_AUTO_TRADE",
        autoTrade
    }
);

// SET MOBILE RECHARGERS
export const setMobileRechargers = (mobileRechargers) => (
    {
        type: "SET_MOBILE_RECHARGERS",
        mobileRechargers
    }
);

// SET OPERATORS
export const setOperators = (operators) => (
    {
        type: "SET_OPERATORS",
        operators
    }
);

// SET BLOCKCHAINS
export const setBlockchains = (blockchains) => (
    {
        type: "SET_BLOCKCHAINS",
        blockchains
    }
);

// SET PAIRS
export const setPairs = (pair) => (
    {
        type: "SET_PAIRS",
        pair
    }
);

// RESET ALL
export const resetAll = () => (
    {
        type: "RESET_ALL"
    }
);