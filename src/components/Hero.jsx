// import React from "react";
// import Heroimg from "../assets/hero.png";

// function Hero() {
//   return (
//     <>
//       <section className="flex flex-col-reverse md:flex-row md:justify-between">
//         <div className="flex flex-col items-start justify-center gap-2">
//           <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF3EA] px-4 py-2 text-sm font-medium text-[#F57C1F]">
//             ✨ Cook. Eat. Enjoy.
//           </p>

//           <h1 className="md:text-7xl md:font-bold text-5xl font-medium text-[#1F2937]">
//             Discover{" "}
//             <span className="text-[#4CAF50] hover:text-[#43A047]">
//               Delicious
//             </span>{" "}
//             Meals
//           </h1>
//           <p className="text-[#6B7280]">
//             Explore recipes from around the world and cook your favorites.
//           </p>
//         </div>
//         <div>
//           <img
//             src={Heroimg}
//             alt="hero img"
//             className=" md:h-160 md:w-auto md:pr-10"
//           />
//         </div>
//       </section>
//     </>
//   );
// }

// export default Hero;

import React from "react";
import Heroimg from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-12 md:flex-row md:px-10 lg:px-13 lg:py-10">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFF3EA] px-4 py-2 text-sm font-medium text-[#F57C1F]">
            ✨ Cook. Eat. Enjoy.
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight text-[#1F2937] md:text-6xl lg:text-7xl">
            Discover <span className="text-[#4CAF50]">Delicious</span> Meals
          </h1>

          <p className="mt-6 text-base leading-8 text-[#6B7280] md:text-lg">
            Explore recipes from around the world and cook your favorites with
            fresh ingredients and simple steps.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={Heroimg}
            alt="Hero"
            className="w-full max-w-sm md:max-w-md lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
