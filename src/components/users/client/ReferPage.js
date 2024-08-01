import React, { useEffect } from 'react'
import { SideBar, Header } from "./SideBar";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setConfig } from '../../../api/configuration.js';
import { requireLogin } from '../../../api/user.js';

const ReferPage = () => {
    requireLogin();

    const user = useSelector(state => state.account.user);
    const configuration = useSelector(state => state.configuration);

    let referralLink = `${configuration.app.protocol}://${configuration.app.host}/signup?referrer=${user.uuid}`

    const copyAddress = (event) => {
        event.preventDefault();
        var copyText = $("#referralBox__code")[0].innerText;
        navigator.clipboard.writeText(copyText);
        $('.alert').fadeIn('show');

        setTimeout(() => $('.alert').hide(), 2000)
    }

    const openReferralPage = async (event) => {
        event.preventDefault();
        $(".referralPage").toggleClass("invisible")
    }

    useEffect(() => {
        setConfig()
    }, []);


    return (
        <section className="home reward">
            <div className="container">
                <SideBar selectedItem={"reward"} />
                <div className="home__main">
                    <Header title="Refer" />
                    <div className="home__content">
                        <div className="referralPage ">
                            <div className="referralBox">
                                <p className="referralBox__title">Share to make money</p>
                                <p className="referralBox__subTitle">Your referral link</p>
                                <div className="referralBox__codeBox">
                                    <small id="referralBox__code" className="referralBox__code">{referralLink}</small>
                                    <div className="referralBox__button" onClick={copyAddress}>Copy</div>
                                </div>
                                <div class="alert">
                                    <span class="closebtn" onClick={(event) => event.target.parentElement.style.display = 'none'}>&times;</span>
                                    Copied to clipboard
                                </div>
                            </div>

                            <div className="commissionBox">
                                <div className="commission">
                                    <p>First<br />Commission</p>
                                    <p className="commission__amount">{user.first_generation_bonuses}</p>
                                </div>
                                <div className="commission">
                                    <p>Second<br />Commission</p>
                                    <p className="commission__amount">{user.second_generation_bonuses}</p>
                                </div>
                                <div className="commission">
                                    <p>Third<br />Commission</p>
                                    <p className="commission__amount">{user.third_generation_bonuses}</p>
                                </div>
                            </div>

                            <p className="referralBox__title">Total Recommended Members</p>

                            <div className="commissionBox">
                                <div className="commission">
                                    <p>First<br />Level Member</p>
                                    <p className="commission__amount">{user.first_generation_referrals}</p>
                                </div>
                                <div className="commission">
                                    <p>Second<br />Level Member</p>
                                    <p className="commission__amount">{user.second_generation_referrals}</p>
                                </div>
                                <div className="commission">
                                    <p>Third<br />Level Member</p>
                                    <p className="commission__amount">{user.third_generation_referrals}</p>
                                </div>
                            </div>

                            <p className="referralBox__title">Total Members Deposit</p>

                            <div className="commissionBox">
                                <div className="commission">
                                    <p>First<br />Level Deposits</p>
                                    <p className="commission__amount">{user.first_generation_deposit}</p>
                                </div>
                                <div className="commission">
                                    <p>Second<br />Level Deposits</p>
                                    <p className="commission__amount">{user.second_generation_deposit}</p>
                                </div>
                                <div className="commission">
                                    <p>Third<br />Level Deposits</p>
                                    <p className="commission__amount">{user.third_generation_deposit}</p>
                                </div>
                            </div>

                            <ul className="input__passwordRequirements">
                                <li className="input__underLabel input__underLabel--passwordRequirements">The commission of the member you recommend will be added to your fund account according to the proportion after transaction is closed</li>
                                <li className="input__underLabel input__underLabel--passwordRequirements">Direct referral income is 10% and indirect is 5%. Referral will depend on the daily trade profit.</li>
                            </ul>

                            <Link to="/term">Terms and Conditions Apply</Link>
                        </div>
                    </div></div></div></section>

    )
}

export default ReferPage