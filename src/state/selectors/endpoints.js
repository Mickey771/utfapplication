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

export const selectUploadCredentialsEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/credentials/`;
        }
}

export const selectLoginUserEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/login/`;
        }
}

export const selectRequestResetPasswordEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/recover/`;
        }
}

export const selectSubmitPasswordRecoveryCodeEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/confirm_recovery/`;
        }
}

export const selectResetPasswordEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/new_password/`;
        }
}

export const selectGoogleLoginEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/google_auth/`;
        }
}

export const selectVerifyLoginEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/confirm_login/`;
        }
}

export const selectGetPairHistoryEndpoint = (endpoints) => {
        return (pairName)=>{
            let d = new Date();
            let day = d.toISOString().split("T")[0]
            return `https://api.polygon.io/v2/aggs/ticker/C:${pairName}/range/1/minute/${day}/${day}?adjusted=true&sort=desc&limit=1440`
        }
}

export const selectGetUserInfoEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/profile/`;
        }
}

export const selectNewBuyTradeEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/trading/buy_trade/`;
        }
}

export const selectNewSellTradeEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/trading/sell_trade/`;
        }
}

export const selectCloseTradeEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/trading/close_trade/`;
        }
}

export const selectGetOpenTradesEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/trading/open_trades/`;
        }
}

export const selectGetDepositAddressEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/trading/admin_address/`;
        }
}

export const selectUploadDepositProofEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/trading/deposit_proof/`;
        }
}

export const selectRequestWithdrawalEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/trading/place_withdrawal/`;
        }
}

export const selectRequestWithdrawalVerificationCodeEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/trading/trigger_withdrawal_email/`;
        }
}

export const selectGetActivityEndpoint = (endpoints) => {
        return ()=>{
            return `${endpoints.server.protocol}://${endpoints.server.host}/${endpoints.apiVersion}/accounts/activity/`;
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