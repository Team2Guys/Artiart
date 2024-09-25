import Corporate from "./Corporate";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: `get in touch for corporate orders | Artiart`,
  description: `ARTIART offers customized corporate solutions for businesses. Contact us for bulk orders, product customization, and exceptional service.`,
}



const Page = () => {
  return (
    <>
      <Corporate />
      
    </>
  );
};

export default Page;
