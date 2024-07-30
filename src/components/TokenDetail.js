import React from 'react'

const TokenDetail = () => {
    return (
        <div className="ufx_token">
            <h1>UFX Token Airdrop Details</h1>
            <h2>Launch Information</h2>
            <p>UFX Token is set to launch with an anticipated price ranging between $10 to $20 per token. The total supply of UFX Tokens available for distribution stands at 100,000 tokens.</p>

            <h2>Airdrop Criteria</h2>
            <p>To celebrate the token launch, a promotional airdrop is being offered. The distribution of tokens will be determined by two primary criteria:</p>
            <ol>
                <li><strong>Investment Value:</strong> Participants will receive more UFX Tokens based on the amount they invest in the token or trading platform.</li>
                <li><strong>Duration of Trading Account:</strong> Long-term users who maintain an active trading account over an extended period will earn additional tokens as a reward for their loyalty and continued participation.</li>
            </ol>

            <h2>Token Distribution Formula</h2>
            <p>Each participant's token quantity will be calculated daily using a formula that allocates a basic amount of 0.001 tokens per day. This daily allocation will be multiplied by the number of trading days to determine the total quantity of tokens each user will receive.</p>

            <h2>Calculation Methodology</h2>
            <h3>Daily Token Allocation:</h3>
            <p>Participants will receive 0.001 UFX Tokens per day for each unit of their investment value. For instance, if a user has invested $10,000, they will receive 3 tokens per month.</p>

            <h3>Total Tokens Earned:</h3>
            <p>To find out the total number of tokens earned during the promotional period, multiply the daily token allocation by the number of trading days the participant maintains an active account.</p>

            <h3>Formula</h3>
            <p>Let’s illustrate this with an example:</p>
            <ul>
                <li>Investment Value: $10,000</li>
                <li>Token Quantity: 0.001</li>
            </ul>
            <h3>Step-by-Step Calculation:</h3>
            <ul>
                <li>Daily Tokens: 10,000 x 0.001 / 100 = 0.1 tokens per day.</li>
                <li>Monthly Tokens: 10,000 x 0.001 / 100 = 0.1 x 30 = 3 tokens per month.</li>
            </ul>

            <h2>Withdrawal Policy</h2>
            <p>Participants should note that withdrawing their deposited amount before a specified period might result in the loss of their token airdrop. This condition encourages participants to maintain their investments for the duration of the promotion to fully benefit from the token distribution.</p>

            <h2>Conclusion</h2>
            <p>The UFX Token launch airdrop presents an opportunity for participants to earn tokens based on their investment and the longevity of their trading account activity. By leveraging a straightforward daily token allocation formula and encouraging sustained engagement, the promotion aims to incentivize active participation and long-term commitment among users. This approach not only promotes the new token but also fosters a community of committed investors and traders within the UFX ecosystem.</p>
            <p>In summary, participants can calculate their expected token quantity by multiplying their daily token allocation (based on their investment) by the number of trading days they maintain an active account. This method ensures transparency and clarity in how tokens are distributed, aligning with the promotional goals of the UFX Token launch. Participants are encouraged to adhere to the withdrawal policy to retain their eligibility for the token airdrop and maximize their benefits from this promotional offering.</p>
        </div>
    )
}

export default TokenDetail