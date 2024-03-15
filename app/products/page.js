"use client";
import {Input} from '/components/ui/input.jsx'
import { useState, useEffect } from 'react';
import {ProductsData} from '/data/products'
import {ProductCard} from '/components/ui/ProductCard'

const ProductsView = () => {

  const categories = [
  "Door Locks",
  "Mortise Handles",
  "Rose Handles",
  "Door Handles"
];

  const fetchAllProducts = () => {
    return ProductsData;
  }

  const [category, setCategory] = useState("All");

  const allCategories = [
    "All",
    ...categories,
  ]

  const [allProducts, setAllProducts] = useState(
    fetchAllProducts()
  );

  const [searchInput, setSearchInput] = useState("");

  const handleFilter = (value) => {
  if (!value) setAllProducts(fetchAllProducts());
  else {
    setAllProducts(fetchAllProducts());
    let _newProductList = [];
    _newProductList = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    setAllProducts(_newProductList);
  }
};

  const handleCategoryFilter = (selectedCategory) => {
    if (selectedCategory === "All") {
      setAllProducts(fetchAllProducts());
    } else {
      const filteredProducts = fetchAllProducts().filter(product => product.category === selectedCategory);
      setAllProducts(filteredProducts);
    }
    setCategory(selectedCategory);
  };

  useEffect(() => {
    if (!allProducts) setAllProducts(fetchAllProducts());
  }, [searchInput, allProducts]);

  return (
    <div className="products-view">
      <div className="my-16 mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[840px] max-lg:w-[650px] max-md:w-[600px] max-sm:w-[360px]">
        <h1 className="leading-snug tracking-tight font-semibold text-5xl">
          Locks & Accessories by Elara
        </h1>
        <p className="text-lg text-neutral-500 mt-4">
          We have something for everyone, from locks to door handles, and
          everything in between to make your home more secure and beautiful.
        </p>

        <div className="products-list-container">
          <div className="product-recommendations-options flex flex-row flex-wrap items-center justify-start gap-6 my-6">
            {allCategories.map(
              (categoryItem, categoryIndex) => {
                return (
                  <button
                    key={categoryIndex}
                    // onClick={() => setCategory(categoryItem)}
                    onClick={() => handleCategoryFilter(categoryItem)}
                    className={category === categoryItem ? 'active' : ''}
                  >
                    {categoryItem}
                  </button>
                );
              }
            )}
          </div>
          <div className="search-filter-container">
            <Input
              type="text"
              placeholder="Search by name, category or model number"
              onChange={(e) => {
                setSearchInput(e.target.value);
                handleFilter(e.target.value);
              }}
              value={searchInput}
            />
          </div>
        </div>
        <div>
          <div className="product-items-container grid grid-cols-1 sm:grid-cols-3 w-full mx-auto items-center center gap-10 my-8">
            {allProducts.map((product, index) => {
              return (
                <ProductCard
                  title={product.title}
                  description={product.description}
                  slug={product.slug}
                  imagePathname={product.imagePathname}
                  category={product.category}
                  status={product.status}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;


