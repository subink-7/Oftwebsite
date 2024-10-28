import React from 'react';
import ProductCard from './components/ProductCard'; // Ensure the component name is correct
import image from "@/app/images/kurtha.jpg"; // Importing the image correctly
import Instragram from './components/Instragram';

export default function Page() {
  return (
    <div className=''> {/* Ensures black background and full height */}
      
      {/* Navbar */}
      <div className=' bg-black min-h-fit'>
      <div className="text-white my-0 "> {/* Removed margin */}
        <nav className="flex items-center ml-32 space-x-10">
          <a href="#" className="text-blue-500 hover:underline">Home</a>
          <span>|</span>
          <a href="#" className="text-blue-500 hover:underline"> Sari</a>
          <span>|</span>
          <a href="#" className="text-blue-500 hover:underline">Kurtha</a>
          <span>Sort: Newest</span>
          <span>|</span>
        </nav>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 p-4 m-2">
        {/* Using grid with different column layouts for responsiveness */}
        <ProductCard
          imageUrl={image} // Use the imported image directly
          title={"One piece"}
          off={"10% to 15%"}
          price={"2000 now 1000"}
        />
        <ProductCard
          imageUrl={image} // Use the imported image directly
          title={"One piece"}
          off={"10% to 15%"}
          price={"2000 now 1000"}
        />
        <ProductCard
          imageUrl={image} // Use the imported image directly
          title={"One piece"}
          off={"10% to 15%"}
          price={"2000 now 1000"}
        />
        <ProductCard
          imageUrl={image} // Use the imported image directly
          title={"One piece"}
          off={"10% to 15%"}
          price={"2000 now 1000"}
        />
        {/* <ProductCard
          imageUrl={image} // Use the imported image directly
          title={"One piece"}
          off={"10% to 15%"}
          price={"2000 now 1000"}
        />
        <ProductCard
          imageUrl={image} // Use the imported image directly
          title={"One piece"}
          off={"10% to 15%"}
          price={"2000 now 1000"}
        />
        <ProductCard
          imageUrl={image} // Use the imported image directly
          title={"One piece"}
          off={"10% to 15%"}
          price={"2000 now 1000"}
        />
        <ProductCard
          imageUrl={image} // Use the imported image directly
          title={"One piece"}
          off={"10% to 15%"}
          price={"2000 now 1000"}
        /> */}
        
      
      </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 bg-white">
  <Instragram image={image} />
  <Instragram image={image} />
  <Instragram image={image} />
  <Instragram image={image} />
  <Instragram image={image} />
  <Instragram image={image} />
  <Instragram image={image} />
  <Instragram image={image} />
  <Instragram image={image} />
  <Instragram image={image} />
</div>



      
     
       <div className="text-center mt-6 text-black bg-white">
       <p>
          Follow us on Instragram
        </p>
        <p>Tag us to get a chance to get featured</p>
      </div>



  

      {/* Pagination */}
      <div className="flex justify-center items-center my-4 bg-white">
        <span className="flex space-x-2 text-black"> {/* Center the pagination */}
          <button className="hover:text-blue-500 transition-colors px-2 py-1">
            &lt;
          </button>
          <span className="hover:text-blue-500 transition-colors cursor-pointer px-2 py-1">1</span>
          <span className="hover:text-blue-500 transition-colors cursor-pointer px-2 py-1">2</span>
          <span className="hover:text-blue-500 transition-colors cursor-pointer px-2 py-1">3</span>
          <span className="hover:text-blue-500 transition-colors cursor-pointer px-2 py-1">4</span>
          <button className="hover:text-blue-500 transition-colors px-2 py-1">
            &gt;
          </button>
        </span>
      </div>
    </div>
  );
}
