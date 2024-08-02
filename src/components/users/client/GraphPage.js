import React from 'react'
import { useState } from 'react'
import TradingViewChart from '../../TradingViewChart'
import { Link } from 'react-router-dom'
import Graph from '../../Graph'

const GraphPage = () => {
    const [selected, setSelected] = useState('Forex')
    return (
        <section className='graph_container'>
            <section className='graph'>
                <div className="graph_top">
                    <div className="graph_top_left">
                        <Link to={'/reward'}><img src="/images/leftarrow.png" className='arrow' alt="left arrow" /></Link>
                        <img src="/images/ufx.png" className='logo' alt="logo" />
                        <h1>Market Summary</h1>
                    </div>
                    <div className="graph_top_right">
                        {['Forex', 'Crypto', 'Indices', 'Stocks', 'Bonds'].map((item, index) => (
                            <button
                                onClick={() => setSelected(item)}
                                key={index}
                                className={`${selected === item ? 'graph_top_right_item active' : 'graph_top_right_item'}`}
                            >
                                {item}
                            </button>))}
                    </div>
                </div>
                <div className="graph_middle ">
                    <div className="gbpusd gbpusd_active">
                        <img src="/images/gbpusd.png" alt="gbp" />
                        <div className='gbpusd_text'>
                            <p className='gbpusd_text_top'>GBP to USD</p>
                            <p className='gbpusd_text_bottom'>1.084<span>35</span> USD <span>+1.11%</span></p>
                        </div>
                    </div>
                    <div className="gbpusd ">
                        <img src="/images/gbpusd.png" alt="gbp" />
                        <div className='gbpusd_text'>
                            <p className='gbpusd_text_top'>GBP to USD</p>
                            <p className='gbpusd_text_bottom'>1.084<span>35</span> USD <span>+1.11%</span></p>
                        </div>
                    </div>
                    <div className="right_arrow">
                        <img src="/images/rightarrow.png" alt="right arrow" />
                    </div>
                    <div className="price">
                        <p>Approximate price:  <span>$456.665</span></p>
                    </div>
                </div>
                {/* <div style={{ height: '733px', marginTop: '17px' }}> <TradingViewChart /></div> */}
                <div style={{ height: '733px', marginTop: '27px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ margin: 0, padding: 0 }}>UFX Total Market Value</p>
                        <h3 style={{ margin: 0, padding: 0 }}>$10</h3>
                    </div>
                    <Graph />
                </div>
            </section>
        </section>
    )
}

export default GraphPage