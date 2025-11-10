import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-none">
        
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/7d8J4TBw/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg"
            className="w-full object-cover"
            alt="Toy slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Welcome to HomeNest
            </h2>
            <p className="text-base md:text-lg">Explore the world of amazing Home</p>
          </div>
          <div className="absolute left-4 right-4 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

      
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/0pP9gZvy/minh-pham-Ot-XADk-Uh3-I-unsplash.jpg"
            className="w-full object-cover"
            alt="Toy slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Discover New Adventures
            </h2>
            <p className="text-base md:text-lg">HomeNest that spark imagination</p>
          </div>
          <div className="absolute left-4 right-4 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

    
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/XrX8rx2W/outsite-co-R-LK3sq-Li-Bw-unsplash.jpg"
            className="w-full object-cover"
            alt="Toy slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Fun for Everyone
            </h2>
            <p className="text-base md:text-lg">From Home to collectors</p>
          </div>
          <div className="absolute left-4 right-4 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/JWp8H4p2/spacejoy-IH7w-Psjwomc-unsplash.jpg"
            className="w-full object-cover"
            alt="Toy slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
               Your Favorites
            </h2>
            <p className="text-base md:text-lg">Exclusive deals & discounts</p>
          </div>
          <div className="absolute left-4 right-4 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Home;