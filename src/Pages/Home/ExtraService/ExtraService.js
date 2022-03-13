import React from 'react';
import './ExtraService.css';
import girl from './../../../images/girl1-removebg-preview.png'

const ExtraService = () => {
    return (
        <div className="banner-main2 mt-5">
            <div className="banner-overlay">
                <div className="container col-md-12 col-sm-6">
                    <div className="row">
                        <div className="col-lg-6">
                           <div className="banner-content text-center text-md-start banner3 ">
                                <h4 className="banner-title22">Awesome Shop From</h4>
                                <h2 className="heading2">Total Cosmetic Store</h2>
                                <p className="text mt-4 para6 text-dark">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                <div className="button2 mt-5 ">
                                    <button className="puschase">Purchase Now</button>
                                    <button className="demo">Demo Now</button>
                                </div>
                           </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content text-center text-md-start banner2">
                            <img src={girl} className="banner2" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraService;