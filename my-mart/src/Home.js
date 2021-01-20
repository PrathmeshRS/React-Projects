import React from 'react';
import "./Home.css";
import banner from "./banner.png";
import Product from "./Product";
import steveJobs from "./steveJobs.jpg";
import appleairpod from "./appleairpod.jpg";
import iphone11 from "./iphone11.jpg";
import tv from "./tv.jpg";
// import steveJobs from "./steveJobs.jpg";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="banner">
                    <img src={banner} alt="banner" width="80%" className="banner__image" />
                </div>
            </div>
            <div className="home__products">
                <div className="home__row">
                    <Product
                        title="Steve Jobs"
                        price={20.20}
                        rating={4}
                        img={steveJobs}
                    />
                    <Product
                        title="New Apple air pods pro"
                        price={50}
                        rating={3}
                        img={appleairpod}
                    />
                    <Product
                        price={150}
                        title="New Samsung Ultra HD 4k+ android TV"
                        rating={3}
                        img={tv}
                    />
                </div>
                <div className="home__row">
                    {/* <Product />
                <Product />
                <Product />
                <Product /> */}
                </div>
                <div className="home__row">
                    {/* <Product />
                <Product /> */}
                </div>
            </div>
        </div>
    )
}

export default Home;
