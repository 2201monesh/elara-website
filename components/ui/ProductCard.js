import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  title,
  description,
  category,
  imagePathname,
  status,
  purchaseLink
}) => {
  return (

<div className="product-recommendation-card p-6 border shadow-sm w-full h-[500px]">
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

    <button className="btn mt-4 ml-auto btn-brown px-4 py-2 rounded">
      <a href={purchaseLink}>Purchase</a>
    </button>
  </div>
</div>
  );
};

export { ProductCard };