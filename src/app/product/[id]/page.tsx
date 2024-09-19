
import ProductDetail from 'components/Detail/ProductDetail';
import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Header/Navbar';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Product from 'components/Home/Product';
const Product = dynamic(() => import('components/Home/Product'), {
  ssr: false,
})
import Loader from 'components/Loader/Loader';
import { generateSlug, SEO_products } from 'Data/data';

import Script from 'next/script'

import type { Metadata, ResolvingMetadata } from 'next'
import PRODUCT from './PRODUCT';
import dynamic from 'next/dynamic';
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata({ params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const id = params.id
  let SEOPRODUCT = SEO_products.find((item) => item.name.toLowerCase() === id?.toLowerCase())

 
  return {
    title: SEOPRODUCT?.metaTitle,
    description: SEOPRODUCT?.metaDescription,
  
 
  }
}
 
const Detail = async ({ params }: { params: { id: string } }) => {
  const parsedProduct = params.id ? params.id.toLowerCase() : "";


  let SEOPRODUCT = SEO_products.find((item) => item.name.toLowerCase() === parsedProduct?.toLowerCase())

  return (
    <>

      <Script type="application/ld+json" id="product-json-ld" strategy="afterInteractive">
        {JSON.stringify(
          SEOPRODUCT?.Script)}
      </Script>
<PRODUCT id={parsedProduct}/>

    </>
  );
};

export default Detail;



