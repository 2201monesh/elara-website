import Image from "next/image";

const ProductCard = ({
  title,
  description,
  category,
  imagePathname,
  status,
}) => {
  return (

<div className="product-recommendation-card p-6 border border-neutral-400 shadow-sm w-full">
  <Image
    src={imagePathname}
    alt={title}
    height={300}
    width={350}
    className="transition duration-500 scale-105 hover:scale-110 sm:h-72"
    style={{ border: 'none' }}
  />


  <div className="product-details-wrapper mt-4">
    <h3 className="product-title tracking-tight font-medium text-lg">
      {title}
    </h3>

    <button className="btn mt-4 ml-auto text-white px-4 py-2 rounded bg-[#424530]">
      Purchase
    </button>
  </div>
</div>
  );
};

export { ProductCard };