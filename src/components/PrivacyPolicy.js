import React from 'react'
import SharedLayout from './SharedLayout'

const PrivacyPolicy = () => {
    return (
        <SharedLayout>
            <section className='privacy_policy' id="privacy-policy">
                <h2>Privacy Policy</h2>

                <p>At Universal Fx, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our website and services.</p>

                <h3>Information We Don't Collect</h3>

                <p>We want to reassure our users that we do not collect any personal information that could identify you without your explicit consent. We do not gather:</p>

                <ul>
                    <li>
                        <strong>Personal Information:</strong> We do not collect your name, email address, contact details, or any other personal identifiers unless you voluntarily provide them to us for specific purposes, such as signing up for an account or contacting customer support.
                    </li>
                    <li>
                        <strong>Financial Information:</strong> We do not collect any financial information such as credit card details or bank account information.
                    </li>
                    <li>
                        <strong>Trading Data:</strong> While we provide a trading platform, we do not collect any data related to your trading activities, including transaction history and account balances.
                    </li>
                </ul>

                <h3>How We Ensure Your Privacy</h3>
                <p>Even though we don't collect personal information, we are committed to ensuring the utmost privacy and security of any data you share with us:</p>

                <ul>
                    <li>
                        <strong>Data Security:</strong> We employ industry-standard security measures to protect any information you voluntarily provide to us from unauthorized access, disclosure, alteration, or destruction.
                    </li>
                    <li>
                        <strong>User Anonymity:</strong> We prioritize user anonymity and do not track or monitor your online activities without your explicit consent.
                    </li>
                    <li>
                        <strong>Third-Party Disclosure:</strong> We do not sell, trade, or otherwise transfer your information to third parties without your consent, ensuring your data remains confidential.
                    </li>
                </ul>

                <h3>Your Rights</h3>

                <p>Even though we don't collect personal information, you still have certain rights regarding your data:</p>

                <ul>
                    <li>
                        <strong>Access and Correction:</strong> If you voluntarily provide us with personal information, you have the right to access, correct, or delete that data.
                    </li>
                    <li>
                        <strong>Opt-Out:</strong> You have the right to opt out of any data collection or processing activities, except where necessary for the functioning of our services or compliance with legal obligations.
                    </li>
                </ul>

                <h3>Updates to This Privacy Policy</h3>

                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or contacting you directly.</p>

            </section>
        </SharedLayout>

    )
}

export default PrivacyPolicy