export default function Info() {
  return (
    <div className="w-screen bg-gradient-to-r from-gray-300 to-gray-50 xs:h-48 md:h-64 lg:h-96 flex py-6">
      <div className="flex justify-between w-11/12 m-auto md:w-10/12 lg:w-9/12">
        {/* Image and text container 1 */}
        <div className="flex flex-col items-center gap-4">
          <div className="mb-4">
            <img
              src="../src/assets/Imgs/HomePageImages/SecTwoInfo/highest-quality.png"
              alt="highest-quality-img"
            />
          </div>

          <div className="flex flex-col font-bold items-center text-xs sm:text-sm md:text-lg lg:text-2xl">
            <span>HIGHEST</span>
            <span>QUALITY</span>
          </div>

          <div className="hidden lg:block font-light text-sm  w-72">
            <span className="">
              We offer high quality Martial Arts equipment: Karate, WKF
              products, Judo, Taekwondo, Kung Fu, Kobudo and much more…
            </span>
          </div>
        </div>
        {/* End of image and text container 1 */}

        {/* Image and text container 2 */}
        <div className="flex flex-col items-center gap-4">
          <div className="mb-4">
            <img
              src="../src/assets/Imgs/HomePageImages/SecTwoInfo/large-inventory.png"
              alt="large-inventory-img"
            />
          </div>

          <div className="flex flex-col font-bold items-center text-xs sm:text-sm md:text-lg lg:text-2xl">
            <span>LARGE</span>
            <span>INVENTORY</span>
          </div>

          <div className="hidden lg:block font-light text-sm  w-72">
            <span className="">
              We hold a huge selection of martial arts inventory in our
              warehouses and offer multiple products to fulfill your needs.
            </span>
          </div>
        </div>
        {/* End of image and text container 2 */}

        {/* Image and text container 3 */}
        <div className="flex flex-col items-center gap-4">
          <div className="mb-4">
            <img
              src="../src/assets/Imgs/HomePageImages/SecTwoInfo/fast-shipping.png"
              alt="fast-shipping-img"
            />
          </div>

          <div className="flex flex-col font-bold items-center text-xs sm:text-sm md:text-lg lg:text-2xl">
            <span>FAST</span>
            <span>SHIPPING</span>
          </div>

          <div className="hidden lg:block font-light text-sm w-72">
            <span className="">
              Fast shipping at the best price all over the world within 24 hours
              when inventory permits.
            </span>
          </div>
        </div>
        {/* End of image and text container 3 */}

        {/* Image and text container 4 */}
        <div className="flex flex-col items-center gap-4">
          <div className="mb-4">
            <img
              src="../src/assets/Imgs/HomePageImages/SecTwoInfo/wholesale-prices.png"
              alt="wholesale-prices-img"
            />
          </div>

          <div className="flex flex-col font-bold items-center text-xs sm:text-sm md:text-lg lg:text-2xl">
            <span>WHOLESALE</span>
            <span>PRICES</span>
          </div>

          <div className="hidden lg:block font-light text-sm w-72">
            <span className="ml-14">Own a Martial Arts Club?</span>
            <span className="block mt-6">
              Take advantage of our wholesale prices.
            </span>
          </div>
        </div>
        {/* End of image and text container 4 */}
      </div>
    </div>
  );
}
