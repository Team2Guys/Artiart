"use client"
import ProductDetail from 'components/Detail/ProductDetail';
import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Header/Navbar';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from 'components/Home/Product';
import Loader from 'components/Loader/Loader';
import { generateSlug } from 'Data/data';

import Script from 'next/script'


const PRODUCT = async ({ id }: { id: string }) => {
  const parsedProduct = id ? id.toLowerCase() : null;
  const [products, setProducts] = useState([]);
  const [productDetail, setproductDetail] = useState(null);
  const [productsLoading, setProductsloading] = useState<boolean>(false);





  useEffect(() => {
    const fetchData = async () => {
      try {
        setProductsloading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllproducts`,
        );
        if (parsedProduct && response.data.products && response.data.products.length > 0) {
          let slicedProducts =
            response.data.products.length > 4
              ? response.data.products
                .filter(
                  (item: any) => generateSlug(item.name) !== parsedProduct,
                )
                .slice(0, 4)
              : response.data.products.filter(
                (item: any) => generateSlug(item.name) !== parsedProduct,
              );
          setProducts(slicedProducts);
          for (let key of response.data.products)
            if (generateSlug(key.name) === parsedProduct) {
              return setproductDetail(key);
            }
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setProductsloading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Navbar />
      {productDetail && !productsLoading ? (
        <>
          <ProductDetail parsedProduct={productDetail} />

          <div>
            <Product
              productItems={products}
              productsLoading={productsLoading}
              HeadingName="You may also like"
            />
          </div>
        </>
      ) : !productDetail && productsLoading ? (
        <div className="flex justify-center items-center h-[30vh]">
          <Loader />
        </div>
      ) : null}

      <Footer />
    </>
  );
};

export default PRODUCT;



