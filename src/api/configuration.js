import React, { useEffect } from 'react';
import { Buffer } from 'buffer';
import {useSelector, useDispatch} from 'react-redux'
import { store } from '../app.js'
import API from './api.mjs';
import { setToken } from './user.js';
import NotificationModal from "../components/NotificationModal";
import { showErrorModal, showSuccessModal } from '../state/actions/notification';
import { setAuthentication, setUser } from '../state/actions/account';
import { setOperators, setMobileRechargers, setCurrencies, setBlockchains } from '../state/actions/configuration';

import { selectGetOperatorsInCountryEndpoint, selectGetMobileRechargersEndpoint, selectGetCurrenciesEndpoint,
        selectGetBlockchainsEndpoint } from '../state/selectors/endpoints';

export async function populateOperators(){
    let api = new API();
    const dispatch = store.dispatch;
    let getOperatorsInCountryURL = selectGetOperatorsInCountryEndpoint(store.getState().endpoints)(store.getState().buyAirtimeForm.formData.mobileRechargerId,
                                                                        store.getState().buyAirtimeForm.formData.countryCode);
    let formData = {}

    setToken();
    return api.get(
        getOperatorsInCountryURL,
        formData,
        (response)=>{
            let operators = { ...response.data }
            dispatch(setOperators(operators))
        },
        (errorMessage)=>{
            dispatch(showErrorModal(errorMessage));
        }
    )
}

export async function populateMobileRechargers(){
    let api = new API();
    const dispatch = store.dispatch;
    let getMobileRechargersURL = selectGetMobileRechargersEndpoint(store.getState().endpoints)();
    let formData = {}

    setToken();
    return api.get(
        getMobileRechargersURL,
        formData,
        (response)=>{
            let mobileRechargers = response.data
            let allMobileRechargers = {}

            mobileRechargers.map((mobileRecharger)=>{
                allMobileRechargers[mobileRecharger.name] = mobileRecharger;
            })

            dispatch(setMobileRechargers(allMobileRechargers))
        },
        (errorMessage)=>{
            dispatch(showErrorModal(errorMessage));
        }
    )
}

export async function populateCurrencies(){
    let api = new API();
    const dispatch = store.dispatch;
    let getCurrenciesURL = selectGetCurrenciesEndpoint(store.getState().endpoints)();
    let formData = {}

    setToken();
    return api.get(
        getCurrenciesURL,
        formData,
        (response)=>{
            let currencies = response.data
            let allCurrencies = {}

            currencies.map((currency)=>{
                allCurrencies[currency.currencyId] = currency;
            })

            dispatch(setCurrencies(allCurrencies))
        },
        (errorMessage)=>{
            dispatch(showErrorModal(errorMessage));
        }
    )
}

export async function populateBlockchains(){
    let api = new API();
    const dispatch = store.dispatch;
    let getBlockchainsURL = selectGetBlockchainsEndpoint(store.getState().endpoints)();
    let formData = {}

    setToken();
    return api.get(
        getBlockchainsURL,
        formData,
        (response)=>{
            let blockchains = response.data
            let allBlockchains = {}

            blockchains.map((blockchain)=>{
                allBlockchains[blockchain.blockchainId] = blockchain;
            })

            dispatch(setBlockchains(allBlockchains))
        },
        (errorMessage)=>{
            dispatch(showErrorModal(errorMessage));
        }
    )
}