
import { Link, useLoaderData } from "react-router";
import HomeCard from "../Components/HomeCard";
import { FaCheckCircle, FaComments, FaFilter } from "react-icons/fa";




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
         
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  px-4 md:px-10">

         {
            
          Data.map(model => <HomeCard key={model._id} model={model}></HomeCard>)
        

         }

        </div>
       
      </section>




       <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">
          💎 Why Choose <span className="text-blue-600">HomeNest?</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {/* Card 1 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <FaCheckCircle className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-2xl mb-3">Verified Listings</h3>
            <p className="text-gray-600">
              Every property is verified for authenticity and safety before it’s listed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <FaComments className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-2xl mb-3">Easy Communication</h3>
            <p className="text-gray-600">
              Directly connect with property owners and make hassle-free deals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <FaFilter className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-2xl mb-3">Smart Filtering</h3>
            <p className="text-gray-600">
              Search by location, price, or category to find exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* ========== Testimonials Section ========== */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">
          💬 What Our Users Say
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="italic text-gray-700 text-lg leading-relaxed">
              “Found my dream apartment in just 2 days! Great experience.”
            </p>
            <p className="mt-4 font-semibold text-blue-600">– Rakib, Dhaka</p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="italic text-gray-700 text-lg leading-relaxed">
              “User-friendly website and responsive owners. Highly recommended!”
            </p>
            <p className="mt-4 font-semibold text-blue-600">– Maria, Banani</p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="italic text-gray-700 text-lg leading-relaxed">
              “It made renting so much simpler. Loved the platform.”
            </p>
            <p className="mt-4 font-semibold text-blue-600">– Sazzad, Mirpur</p>
          </div>
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 text-center rounded-t-3xl">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Join thousands of happy users and start your journey with HomeNest today.
        </p>
        <Link
          to="/properties"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Browse Properties
        </Link>
      </section>


      


        </div>
        
      );
};

export default Home;  



