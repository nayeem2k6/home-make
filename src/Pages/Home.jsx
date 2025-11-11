
import { Link, useLoaderData } from "react-router";
import HomeCard from "../Components/HomeCard";




const Home = () => {
 const Data = useLoaderData()
 console.log(Data)




 
 
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
               New HomeNest Make
            </h2>
            <p className="text-base md:text-lg">Find Your Dream Home</p>
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
              Dreem for Everyone
            </h2>
            <p className="text-base md:text-lg">Buy, Sell or Rent Easily</p>
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
            <p className="text-base md:text-lg">Your Nest Awaits at HomeNest</p>
          </div>
          <div className="absolute left-4 right-4 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>



      <section className="">
        <h2 className="text-3xl font-bold text-center mb-8">
          🏡 Featured Real Estates
        </h2>
         
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-10">

         {
            
          Data.map(model => <HomeCard key={model._id} model={model}></HomeCard>)
        

         }

        </div>
       
      </section>


      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          💎 Why Choose HomeNest?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Verified Listings</h3>
            <p className="text-gray-600">
              Every property is verified for authenticity and safety before it’s listed.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Easy Communication</h3>
            <p className="text-gray-600">
              Directly connect with property owners and make hassle-free deals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Smart Filtering</h3>
            <p className="text-gray-600">
              Search by location, price, or category to find exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* ========== Extra Section 1: Testimonials ========== */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          💬 What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <p className="italic">
              “Found my dream apartment in just 2 days! Great experience.”
            </p>
            <p className="mt-3 font-semibold">– Rakib, Dhaka</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <p className="italic">
              “User-friendly website and responsive owners. Highly recommended!”
            </p>
            <p className="mt-3 font-semibold">– Maria, Banani</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <p className="italic">
              “It made renting so much simpler. Loved the platform.”
            </p>
            <p className="mt-3 font-semibold">– Sazzad, Mirpur</p>
          </div>
        </div>
      </section>


      <section className="bg-blue-600 text-white py-16 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="mb-6 text-lg">
          Join thousands of happy users and start your journey with HomeNest today.
        </p>
        <Link
          to=""
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Browse Properties
        </Link>
      </section>


        </div>
        
      );
};

export default Home;  



