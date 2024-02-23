import {createSelector} from 'reselect'

export const selectVerificationTokenEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/resend_activation/`
        }
}

export const selectVerifyEmailEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/activate_account/`;
        }
}

export const selectRegisterUserEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/signup/`;
        }
}

export const selectLoginUserEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/login/`;
        }
}

export const selectVerifyLoginEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/confirm_login/`;
        }
}

export const selectGetUserInfoEndpoint = (endpoints) => {
        return (userId)=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/users/${userId}`;
        }
}

export const selectBuyAirtimeEndpoint = createSelector(state => state.endpoints, (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/transactions/airtime`;
        }
});

export const selectCalculateAirtimeCostEndpoint = createSelector(state => state.endpoints, (endpoints) => {
        return (countryCode, currencyId, amount)=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/transactions/airtime/countries/${countryCode}/currencies/${currencyId}/amount/${amount}`;
        }
});

export const selectGetOperatorsInCountryEndpoint = (endpoints) => {
        return (id, countryCode)=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/mobileRechargers/${id}/country/${countryCode}/operators`;
        }
}

export const selectGetMobileRechargersEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/mobileRechargers`;
        }
}

export const selectGetCurrenciesEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/currencies`;
        }
}

export const selectGetTransactionsEndpoint = (endpoints) => {
        return (userId)=>{
//            userId = "0f2ec2cb-cf8a-4e61-8836-3c76d1178b2f"
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/transactions/users/${userId}`;
        }
}

export const selectGetBlockchainsEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/blockchains`;
        }
}

export const selectGetWalletsEndpoint = (endpoints) => {
        return (userId)=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/wallets/users/${userId}`;
        }
}

export const selectAddWalletEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/wallets`;
        }
}

export const selectAddKeyEndpoint = (endpoints) => {
        return (walletId)=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/api/${endpoints.apiVersion}/wallets/${walletId}/keys`;
        }
}