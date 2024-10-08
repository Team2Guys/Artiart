
'use client';
import CategorySlider from 'components/Carousel/Category';
import Product from 'components/Home/Product';
import Navbar from 'components/layout/Header/Navbar';
import Footer from 'components/layout/Footer';
import VideoMain from 'components/Common/MainVideo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import bannerimage from "../../public/assets/images/Banner-2.webp"
import Link from 'next/link';
import type { Metadata } from 'next'

interface Category {
  id: number;
  name: string;
  image: any;
}

export const metadata: Metadata = {
  title: 'Drinking Water Bottles, Best Travel Mugs & Teapots | ArtiArt',
  description: 'Shop ArtiArt for quality drinking water bottles, the best travel mugs to keep coffee hot, suction cups & teapots. Stylish, functional, and perfect for home or travel.',
}
 


export default function Home() {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsloading] = useState<boolean>(false);
  const [category, setCategory] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProductsloading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllproducts`,
        );
        let filteredProducts = response.data.products.filter((product:any) => product.totalStockQuantity > 0);
        let slicedProducts =
          filteredProducts.length > 8
            ? filteredProducts.slice(0, 8)
            : filteredProducts;
        setProducts(slicedProducts);
        console.log(slicedProducts , "slicedProducts")
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setProductsloading(false);
      }
    };

    const CategoryHandler = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllcategories`,
        );
        const Categories = await response.json();
        setCategory(Categories);
        setLoading(false);
      } catch (err) {
        console.log('err', err);
        setLoading(false);
      }
    };

    CategoryHandler();
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <VideoMain />
      <CategorySlider categories={category} loading={loading} />
      <Link href={"https://artiart.ae/product/watermelon-seagull-suction-bottle"}>
      <Image className='w-full h-full mt-5 md:mt-32' width={2400} height={1000} src={bannerimage} alt='banner'/>
      </Link>
      <Product productItems={products} productsLoading={productsLoading} />
      <Footer />
    </>
  );
}
