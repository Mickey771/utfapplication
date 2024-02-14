import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import $ from 'jquery';


import { Image } from "../../Image";
import { ButtonForm, ButtonInverted } from "../../Button";

import { showErrorModal, showSuccessModal } from '../../../state/actions/notification';
import Input, { CheckBoxInput, SingleInput, IconedInput, FileUpload } from "../../Input";
import { SideBar, Header, TradingPanel} from "./SideBar";

export default function MarketPage() {
const dispatch = useDispatch();
const countries = useSelector(state => state.configuration.countries);
    let selectedCountry = { isoCode: "NG",
                            numberPrefix: "+234",
                            flag: `/images/countries/ng.svg`,
                            currencyCode:"NGN",
                            currencySymbol: "NGN" }

    const clientSignupForm = useSelector(state => state.clientSignupForm);
    const onFormSubmit2 = async (event) => {
        event.preventDefault();
        dispatch(showSuccessModal("We will very your account and get back to you once we are done checking", "/home"));
    }
    const onFormSubmit = async (event) => {
        event.preventDefault();
        $(".signup__verification").removeClass("invisible")
    }
    const togglePasswordVisibility = async (event) => {
        let password = document.getElementById("password");
        if(password.type == "password"){
            password.type = "text";
        }
        else{
            password.type = "password"
        }
    }
    const onVerificationFormSubmit = async (event) => {
        event.preventDefault();
        $(".signup__verification").addClass("invisible")

        $("#verification").removeClass("signup--panel__sidebarMenuItem--active");
        $("#verificationPanel").addClass("invisible");

        $("#personalInfo").addClass("signup--panel__sidebarMenuItem--active");
        $("#personalInfoPanel").removeClass("invisible");
    }
    const sendVerificationToken = async (event) => {}
    let verificationTokenExpiryTimeLeft = useSelector(state => state.clientSignupForm.verificationTokenExpiryTimeLeft);
    let verificationTokenValidityDuration = useSelector(state => state.clientSignupForm.verificationTokenValidityDuration);
    const validateEmail = async ()=>{}
    const logo = useSelector(state => state.configuration.app.logo);

    return (
        <section className="home">
            <div className="container">
                <SideBar selectedItem={"market"} />
                <div className="home__main">
                    <Header title="Market"/>
                    <div className="marketTrend__caption">Market is down <span className="marketTrend__direction">-11.17%</span></div>
                    <p className="marketTrend__duration">In the past 24 hours</p>

                    <div className="market__category">
                        <div className="market__categoryName">Currency pairs</div>
                        <div className="market__categoryNav">
                            <button onClick={()=>{$(".trendingBox").toggleClass("invisible"); $(".market__favorites").toggleClass("invisible")}} className="market__categoryNavButton market__categoryNavSelected">All</button>
                            <button onClick={()=>{$(".trendingBox").toggleClass("invisible"); $(".market__favorites").toggleClass("invisible")}} className="market__categoryNavButton">Gainers</button>
                            <button onClick={()=>{$(".trendingBox").toggleClass("invisible"); $(".market__favorites").toggleClass("invisible")}} className="market__categoryNavButton">Losers</button>
                            <button onClick={()=>{$(".trendingBox").toggleClass("invisible"); $(".market__favorites").toggleClass("invisible")}} className="market__categoryNavButton">Favourites</button>
                        </div>
                    </div>

                    <div className="home__content">
                        <div className="trendingBox trendingBox--home">
                            { [...Array(2)].map((x, key)=>{
                                return <TradingPanel
                                    pair={{name: "GBP/USD", icon: "/images/countries/gb.svg"}}
                                    trendChart={{}}
                                    price={{amount: "$1,085.18", change: "-21.00%"}}
                                    actions={{trade:"e"}}
                                />
                              })
                            }
                        </div>
                        <div className="market__favorites invisible">
                            <div className="market__favoritesImage">
                                <Image src="/images/favorite.png"/>
                            </div>
                            <p>Special place for favorite coins</p>
                            <p>Add your favorite coins and check here easily</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}