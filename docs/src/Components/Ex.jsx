const TestimonialCard = () => {
  return (
  
<div className="flex flex-col items-center space-y-4 px-2">
  <button className="h-7 w-30 border-2 border-yellow-400 text-yellow-400">
    Reviews
  </button>

  <h1 className=" text-center sm:font-extrabold sm:text-4xl md:text-6xl">
    Client testimonials, <br /> real voices heard
  </h1>

  <h3 className="flex items-center text-center sm:text-2xl px-2">
    Read what our satisfied clients have to say about their experience.
  </h3>

  <span className="flex justify-center sm:mb-4">with services.</span>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-wrap">
  {/* Card 1 */}
  <div className="card1 bg-gray-800 text-white rounded-xl p-6 max-w-md shadow-lg">
    <span className="text-yellow-400 text-2xl font-bold">99</span>
    <h2 className="text-xl font-bold mt-2">
      Reliable Assistance: Swift & Efficient
    </h2>
    <p className="text-gray-400 mt-2">
      The dedication and expertise of 100xelevate have made a significant impact on our business.
      We’re thrilled with the results and their ongoing support!
    </p>
    <div className="flex items-center mt-4">
     <img src="Peter.png" alt="" className="h-10 w-10" />
      <div className="ml-10">
        <p className="text-white font-bold">Peter B.</p>
        <p className="text-gray-500 text-sm">CFO</p>
      </div>
    </div>
  </div>
  

  {/* Card 2 */}
  <div className="card1 bg-gray-800 text-white rounded-xl p-6 max-w-md shadow-lg">
    <span className="text-yellow-400 text-2xl font-bold">99</span>
    <h2 className="text-xl font-bold mt-2">
     Quick Help: Efficient $ Relaiable
    </h2>
    <p className="text-gray-400 mt-2">
      We’ve experienced top-tier customer service with 100xelevate. Their professionalism and
      attention to detail are unmatched.
    </p>
    <div className="flex items-center mt-4">
      <img src="Jenny.png" alt="" className="w-10 h-10"/>
      <div className="ml-10">
        <p className="text-white font-bold">Jenny S.</p>
        <p className="text-gray-500 text-sm">Interior Designer</p>
      </div>
    </div>
  </div>

  
  <div className="card1 bg-gray-800 text-white rounded-xl p-6 max-w-md shadow-lg">
    <span className="text-yellow-400 text-2xl font-bold">99</span>
    <h2 className="text-xl font-bold mt-2">
     Solid Support: Efficient and TrustWorthy
    </h2>
    <p className="text-gray-400 mt-2">
      Thanks to 100xelevate, our operations have improved dramatically. Their innovative strategies 
      brought real growth.
    </p>
    <div className="flex items-center mt-4">
     <img src="Matt.png" alt="" className="w-10 h-10" />
      <div className="ml-10">
        <p className="text-white font-bold">Mat H.</p>
        <p className="text-gray-500 text-sm">Small Business Owner</p>
      </div>
    </div>
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
  <div className="card1 bg-gray-800 text-white rounded-xl p-6 max-w-md shadow-lg">
    <span className="text-yellow-400 text-2xl font-bold">99</span>
    <h2 className="text-xl font-bold mt-2">
      Reliable Assistance: Swift & Efficient
    </h2>
    <p className="text-gray-400 mt-2">
      The dedication and expertise of 100xelevate have made a significant impact on our business.
      We’re thrilled with the results and their ongoing support!
    </p>
    <div className="flex items-center mt-4">
      <img src="Peter.png" alt="" className="h-10 w-10"/>
      <div className="ml-10">
        <p className="text-white font-bold">Peter B.</p>
        <p className="text-gray-500 text-sm">CFO</p>
      </div>
    </div>
  </div>

  
  <div className="card1 bg-gray-800 text-white rounded-xl p-6 max-w-md shadow-lg">
    <span className="text-yellow-400 text-2xl font-bold">99</span>
    <h2 className="text-xl font-bold mt-2">
      Exceptional Support & Service
    </h2>
    <p className="text-gray-400 mt-2">
      We’ve experienced top-tier customer service with 100xelevate. Their professionalism and
      attention to detail are unmatched.
    </p>
    <div className="flex items-center mt-4">
     <img src="Jenny.png" alt="" className="w-10 h-10" />
      <div className="ml-10">
        <p className="text-white font-bold">Sarah M.</p>
        <p className="text-gray-500 text-sm">CEO</p>
      </div>
    </div>
  </div>


  <div className="card1 bg-gray-800 text-white rounded-xl p-6 max-w-md shadow-lg">
    <span className="text-yellow-400 text-2xl font-bold">99</span>
    <h2 className="text-xl font-bold mt-2">
      Transformative Business Solutions
    </h2>
    <p className="text-gray-400 mt-2">
      Thanks to 100xelevate, our operations have improved dramatically. Their innovative strategies 
      brought real growth.
    </p>
    <div className="flex items-center mt-4">
    <img src="Matt.png" alt="" className="h-10 w-10" />
      <div className="ml-10">
        <p className="text-white font-bold">David R.</p>
        <p className="text-gray-500 text-sm">Marketing Head</p>
      </div>
    </div>
  </div>
</div>





  

 </div>
 );
};
export default TestimonialCard;