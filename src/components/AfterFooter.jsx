export default function AfterFooter() {
  return (
    <>
      <div className="flex flex-col ">
        <div>
          <img
            className="block w-screen hover:transform hover:scale-x-110 hover:opacity-70 transition-transform md:hidden"
            src="src\assets\Imgs\AfterFooterSecImages\arawaza-professionnal-martial-arts-equipment-promotion-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block w-screen hover:transform hover:scale-x-110 hover:opacity-70 transition-transform md:hidden"
            src="src\assets\Imgs\AfterFooterSecImages\arawaza-professionnal-martial-arts-equipment-videos-2.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex w-screen">
        <div>
          <img
            className="hidden md:block hover:transform hover:scale-y-105 hover:opacity-70 transition-transform"
            src="src\assets\Imgs\AfterFooterSecImages\arawaza-professionnal-martial-arts-equipment-videos.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="hidden md:block hover:transform hover:scale-y-105 hover:opacity-70 transition-transform"
            src="src\assets\Imgs\AfterFooterSecImages\arawaza-professionnal-martial-arts-equipment-promotion.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
