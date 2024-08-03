import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import { SideBar, Header, } from "./SideBar";
import { requireLogin, closeAllPositions, calculateAccountSummary } from '../../../api/user.js';
import TokenDetail from '../../TokenDetail.js';
import Graph from '../../Graph.js';

export default function RewardPage() {
    requireLogin();

    let accountSummary = calculateAccountSummary()
    if (accountSummary.marginLevel <= 5 && accountSummary.margin > 0)
        closeAllPositions();

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
                                    <Link to={'/refer'}><button>Refer Now</button></Link>
                                </div>
                                <div className='reward_top_item_right'>
                                    <img src="/images/refer.png" alt="graph" />
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '27px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <p style={{ margin: 0, padding: 0 }}>UFX Total Market Value</p>
                                <h3 style={{ margin: 0, padding: 0 }}>$1000000</h3>
                            </div>
                            <Graph />
                        </div>
                        <TokenDetail />
                    </div>
                </div>
            </div>
        </section>
    );
}