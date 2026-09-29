import Image from "next/image";

const pathImages = [
  "Categories_Card_1.png",
  "Categories_Card_1 (1).png",
  "Categories_Card_1 (2).png",
  "Categories_Card_1 (3).png",
  "Categories_Card_1 (4).png",
  "Categories_Card_1 (5).png",
];

const ExplorePaths = () => {
  return (
    <section className="mx-auto my-14 max-w-360 px-5 sm:px-8">
      <h1 className="mb-4 text-center font-poppins text-4xl font-bold text-gray-600">
        Explore Diverse Learning Paths at Bytespace
      </h1>

      <p className="mx-auto max-w-5xl font-satoshi text-center text-base text-gray-600">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring theres something for everyone. Unleash your potential and explore our carefully curated categories.
      </p>

      <div className="mt-10 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
        {pathImages.map((image, index) => (
          <Image
            key={image}
            src={`/assets/paths/${image}`}
            alt={`Learning path ${index + 1}`}
            width={145}
            height={145}
            className="h-auto w-full max-w-[145px] object-contain"
          />
        ))}
      </div>

    </section>
  );
};

export default ExplorePaths;