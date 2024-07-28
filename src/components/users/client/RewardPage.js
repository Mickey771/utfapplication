import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import { Image } from "../../Image";
import { SideBar, Header, } from "./SideBar";
import { requireLogin, closeAllPositions, calculateAccountSummary } from '../../../api/user.js';
import { setConfig } from '../../../api/configuration.js';
import TokenDetails from '../../tokenDetails.js';

export default function RewardPage() {
    // requireLogin();

    let accountSummary = calculateAccountSummary()
    if (accountSummary.marginLevel <= 5 && accountSummary.margin > 0)
        closeAllPositions();

    useEffect(() => {
        setConfig()
    }, []);

    const user = useSelector(state => state.account.user);
    const configuration = useSelector(state => state.configuration);
    let referralLink = `${configuration.app.protocol}://${configuration.app.host}/signup?referrer=${user.uuid}`
    const openReferralPage = async (event) => {
        event.preventDefault();
        $(".referralPage").toggleClass("invisible")
    }

    const copyAddress = (event) => {
        event.preventDefault();
        var copyText = $("#referralBox__code")[0].innerText;
        navigator.clipboard.writeText(copyText);
        $('.alert').fadeIn('show');

        setTimeout(() => $('.alert').hide(), 2000)
    }

    return (
        <section className="home reward">
            <div className="container">
                <SideBar selectedItem={"reward"} />
                <div className="home__main">
                    <Header title="Reward" />
                    <div className="home__content">
                        <div className="trendingBox referralPage">
                            <p className="trendingBox__heading">Earn by Referrals</p>
                            {/* <div className="rewardBanners">
                                <div className="rewardBanner">
                                    <div className="rewardBanner__caption">
                                        <p className="rewardBanner__title">Reward</p>
                                        <p className="rewardBanner__text">Like, Share <br />& get free Crypto</p>
                                        <button className="button" onClick={openReferralPage}>Start Now</button>
                                    </div>
                                    <div className="rewardBanner__imageBox">
                                        <div className="rewardBanner__image">
                                            <Image src="/images/like.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="rewardBanner">
                                    <div className="rewardBanner__caption">
                                        <p className="rewardBanner__title">Refer and Earn</p>
                                        <p className="rewardBanner__text">Refer Your Friend and Win Cryptocoins</p>
                                        <button className="button" onClick={openReferralPage}>Refer Now</button>
                                    </div>
                                    <div className="rewardBanner__imageBox">
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        {/* <div className="referralPage invisible">
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
                        </div> */}

                        <div className='reward_top'>
                            <div className='reward_top_item'>
                                <div className='reward_top_item_left'>
                                    <p>Graph</p>
                                    <h2>Get to see Market
                                        Analysis with Graph</h2>
                                    <button><Link to={'/reward/graph'}>Get Started Now</Link></button>
                                </div>
                                <div className='reward_top_item_right'>
                                    <img src="/images/graph.png" alt="graph" />
                                </div>
                            </div>
                            <div className='reward_top_item orange'>
                                <div className='reward_top_item_left'>
                                    <p>Refer and Earn</p>
                                    <h2>Refer Your Friend
                                        and Win Cryptocoins</h2>
                                    <button>Refer Now</button>
                                </div>
                                <div className='reward_top_item_right'>
                                    <img src="/images/refer.png" alt="graph" />
                                </div>
                            </div>
                        </div>

                        <TokenDetails />
                    </div>
                </div>
            </div>
        </section>
    );
}