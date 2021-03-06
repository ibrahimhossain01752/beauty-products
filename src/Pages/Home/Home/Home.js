import React from 'react';
import AllReview from '../../AllReview/AllReview';
import Banner from '../Banner/Banner';
import Email from '../Email/Email';
import ExtraService from '../ExtraService/ExtraService';
import HomeCard2 from '../HomeCard2/HomeCard2';
import Products from '../Products/Products';
import StyleCard from '../StyleCard/StyleCard';



const Home = () => {
   
    return (
        <div>
           <Banner></Banner>
           <StyleCard></StyleCard>
           <Products></Products>
           <ExtraService></ExtraService>
           <HomeCard2></HomeCard2>
           <Email></Email>
           <AllReview></AllReview>

        </div>
    );
};

export default Home;