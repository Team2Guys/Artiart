import Container from 'components/Common/Container';
import { HeadingH2, HeadingH3, HeadingH5 } from 'components/Common/Heading';
import { Para14 } from 'components/Common/Paragraph';
import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Header/Navbar';
import React from 'react';


const Policy = () => {
interface shipment {
  state: string,
  instruction: string

}

let shipmentCharges:shipment[]=[ 
  
  {state: "Dubai",
  instruction: "Free delivery for orders above AED 150 "
}  ,
{state: "Sharjah",
  instruction: "Free delivery for orders above AED 200 "
}  ,
{state: "Abu Dhabi",
  instruction: "Free delivery for orders above AED 200"
}  ,
{state: "Other Emirates",
  instruction: "Free delivery for orders above AED 250 "
}  ,]

  return (
    <>
      <Navbar />
      <Container className="mt-10 md:mt-20">
        <div className="max-w-screen-md mx-auto space-y-5 ">
          <HeadingH2 className="" title={'Shipping policy'} />
          <Para14
            title={
              'The standard delivery period within the UAE is 1-2 business days from the date of placing the order.Avail free delivery with the following minimum order values:'
            }
          />
          <ul className='flex flex-col gap-1 list-disc '>
       
            {shipmentCharges.map((item:shipment, index: number)=>{
              return(
              <li key={index} className='text-14'> <span className=' font-bold text-bold'>{item.state}: </span>
              <span>{item.instruction}</span>

              
              </li>  

              )
            })}

          </ul>


          <Para14 title={'CASH ON DELIVERY INSIDE UAE:AVAILABLE '} />
          <HeadingH5
            className="underline"
            title={'*SHIPPING WITHIN UAE IS FREE*'}
          />
          {/* <Para14
            title={
              'For countries ourtside of the UAE, the delivery will be made within 7-10 business days. '
            }
          /> */}
          <Para14
            title={
              'In certain cases of special and/or customised handmade products that are delivered from outside the UAE, we take at least 7-14 days business to deliver. '
            }
          />
          <Para14
            title={
              'For deliveries to other countries, please contact us at  b2b@artiart.ae for shipment period and charges.'
            }
          />
          <Para14
            title={
              'Information regarding the Airway Bill number will be communicated to the buyer via email or text message after the products are dispatched.'
            }
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Policy;
