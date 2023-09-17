export default function Products() {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-20 w-screen px-5">
      <div className="w-11/12 m-auto md:flex">
        <div>
          <img
            className=""
            src="../src/assets/Imgs/HomePageImages/SecThreeProducts/ArawazaPlayer.png"
            alt="large-inventory-img"
          />
        </div>

        <div className="flex flex-col md:w-11/12 md:pt-28 lg:w-5/12">
          <span className="text-2xl font-bold md:text-3xl lg:text-4xl">DESIGNED FOR</span>
          <span className="text-5xl font-bold md:text-6xl lg:text-7xl">WINNERS</span>
          <span className="w-11/12 text-sm font-light my-6 md:text-md lg:text-lg">
            Karateka pioneers technical and innovative products in order to
            provide users with the highest performance equipment. We quest for
            perfection by committing to push the boundaries of innovation and
            design through the development of state-of-the-art equipment that
            allows martial arts enthusiasts to surpass their limits.
          </span>
        </div>
      </div>
    </div>
  );
}
