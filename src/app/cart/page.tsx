
import Container from 'components/Common/Container';
import { HeadingH4 } from 'components/Common/Heading';
import CartTable from 'components/Table/CartTable';
import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Header/Navbar';
import Link from 'next/link';
import React from 'react';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Your Shopping Cart | ARTIART',
  description: 'Review your ARTIART shopping cart, update quantities, and proceed to checkout securely',
}
const Cart: React.FC = ({ cartItems }: any) => {
  console.log(cartItems);
  return (
    <>
      <Navbar />
      <Container className="mt-10 md:mt-32">
        <div className="flex justify-between items-center">
          <HeadingH4 title={'Your cart'} />
          <Link className="underline" href={'/products'}>
            Continue shopping
          </Link>
        </div>
        <CartTable />
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
