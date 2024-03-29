import Hero from '../components/Hero';
import React from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
function Home(){
    return(
        <>
            <Hero >
                <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
                    <Link to="/rooms" className='btn-primary'>
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services/>
        </>
    )
}

export default Home;