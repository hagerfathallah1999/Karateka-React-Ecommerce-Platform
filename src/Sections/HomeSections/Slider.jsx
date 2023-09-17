// export default function Slider() {
//   return (
//     <>
//       <div className="relative">
//         <div className="carousel w-screen max-h-screen ">
//           <div id="slide1" className="carousel-item relative w-full">
//             <img src="../src/assets/Imgs/Img01.jpg" className="w-full" />
//             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//               <a
//                 href="#slide4"
//                 className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
//               >
//                 ❮
//               </a>
//               <a
//                 href="#slide2"
//                 className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
//               >
//                 ❯
//               </a>
//             </div>
//           </div>
//           <div id="slide2" className="carousel-item relative w-full">
//             <img src="../src/assets/Imgs/Img02.jpg" className="w-full" />
//             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//               <a
//                 href="#slide1"
//                 className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
//               >
//                 ❮
//               </a>
//               <a
//                 href="#slide3"
//                 className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
//               >
//                 ❯
//               </a>
//             </div>
//           </div>
//           <div id="slide3" className="carousel-item relative w-full">
//             <img src="../src/assets/Imgs/Img01.jpg" className="w-full" />
//             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//               <a
//                 href="#slide2"
//                 className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
//               >
//                 ❮
//               </a>
//               <a
//                 href="#slide4"
//                 className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
//               >
//                 ❯
//               </a>
//             </div>
//           </div>
//           <div id="slide4" className="carousel-item relative w-full">
//             <img src="../src/assets/Imgs/Img02.jpg" className="w-full" />
//             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//               <a
//                 href="#slide3"
//                 className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
//               >
//                 ❮
//               </a>
//               <a
//                 href="#slide1"
//                 className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
//               >
//                 ❯
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center w-full gap-2 absolute bottom-4">
//           <a
//             href="#slide1"
//             className="btn btn-xs btn-circle  bg-black bg-opacity-20 border-none"
//           >
//             1
//           </a>
//           <a
//             href="#slide1"
//             className="btn btn-xs btn-circle  bg-black bg-opacity-20 border-none"
//           >
//             2
//           </a>
//           <a
//             href="#slide3"
//             className="btn btn-xs btn-circle bg-black bg-opacity-20 border-none"
//           >
//             3
//           </a>
//           <a
//             href="#slide4"
//             className="btn btn-xs btn-circle bg-black bg-opacity-20 border-none"
//           >
//             4
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

const Slider = ({ slides }) => {
  return (
    <>
      <div className="carousel w-screen max-h-screen bg-gradient-to-b from-gray-600 to-gray-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative h-1/3 md:h-3/5 lg:h-screen w-screen"
          >
            <img src={slide.image} className="w-full h-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? slides.length : index}`}
                className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
              >
                ❮
              </a>
              <a
                href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle btn-xs md:btn-sm lg:btn-md bg-black bg-opacity-20 border-none"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center w-full gap-2 absolute bottom-4">
        {slides.map((_, index) => (
          <a
            key={index}
            href={`#slide${index + 1}`}
            className="btn btn-xs btn-circle bg-black bg-opacity-20 border-none"
          >
            {index + 1}
          </a>
        ))}
      </div> */}
    </>
  );
};

export default Slider;
