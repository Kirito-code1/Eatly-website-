import '../css/blocks/pricing.css'
export default function Pricing() {
    return (
        <div className="container">
            <div className="pricing-block">
                <div className="wrapper-pricing">
                    <div className="block-pricing">
                <p className="picing-text">Our Pricing</p>
                        <img src='/images/pricing.png' alt="" className='img-pricing' />
                    </div>
                </div>
                <div className="price-type">
                    <div className="cards1">
                        <div className="card1">
                            <p className='type-purchase'>Basic</p>
                            <p className='cost-purchase'>0$<span>/month</span></p>
                            <hr />
                            <p className='desc-purchase'>Completely 100%</p>
                            <p className='desc-purchase'>Free Plan</p>
                            <button className='bntStart'>START FREE</button>
                            <p className='features-purchase'>Features</p>
                            <ul className='ul-list'>
                                <li>Support 24/7</li>
                                <li>Support 24/7</li>
                                <li>Support 24/7</li>
                                <li>Support 24/7</li>
                            </ul>
                        </div>
                        <div className="card1">
                            <p className='type-purchase'>Premium</p>
                            <p className='cost-purchase'>5$<span>/month</span></p>
                            <hr />
                            <p className='desc-purchase'>Completely 100%</p>
                            <p className='desc-purchase'>Free Plan</p>
                            <button className='bntStart'>START FREE</button>
                            <p className='features-purchase'>Features</p>
                            <ul className='ul-list'>
                                <li>Support 24/7</li>
                                <li>Support 24/7</li>
                                <li>Support 24/7</li>
                                <li>Support 24/7</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}