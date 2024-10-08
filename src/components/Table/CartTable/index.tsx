'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Para14, Para16 } from 'components/Common/Paragraph';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import Link from 'next/link';
import Button from 'components/Common/Button';
import { Modal } from 'antd';
import { useRouter } from 'next/navigation';
import { CgLayoutGrid } from 'react-icons/cg';
import { number } from 'yup';
import { count } from 'console';
import { stockInterface } from 'types';

const CartTable: React.FC = () => {
  const [cartproduct, setCartProduct] = useState<any[]>([]);
  const [counts, setCounts] = useState<number[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [inputValue, setinputValue] = useState<number>(0);
  const [stock, setStock] = useState<stockInterface[]>([])

  const [changeId, setchangeId] = useState<any>();
  const router = useRouter();
  const ProductHandler = () => {
    let Products = localStorage.getItem('cart');

    if (Products && JSON.parse(Products).length > 0) {
      const cartItems = JSON.parse(Products || '[]');
      setCartProduct(cartItems);
      console.log(cartItems, 'cartItems');

      setCounts(cartItems.map((item: any) => item.count));
      setStock(cartItems.map((item: any) => item.StockCount));

      const sub = cartItems.reduce(
        (total: number, item: any) => total + item.totalPrice,
        0,
      );
      setSubtotal(sub);
    }
  };




  useEffect(() => {
    ProductHandler();
  }, [changeId]);

  const increment = (index: number) => {
    const Stocks = [...stock]
    
    const newCounts = [...counts];
    if (newCounts[index] >= Stocks[index].quantity) return
    newCounts[index] += 1;
    
    setinputValue((prev)=>prev+1)
    setCounts(newCounts);
    updateTotalPrice(index, newCounts[index]);
    window.dispatchEvent(new Event('cartChanged'));
  };


  const handleOnChange = (index:number, e : React.ChangeEvent<HTMLInputElement>)=>{
    const Value = Number(e.target.value)
    console.log(Value, "value")
if(Value < 0 || Value ==0) return 
const Stocks = [...stock]
    
const newCounts = [...counts];
if (Value > Stocks[index].quantity) return

    newCounts[index] = Value;
    console.log(newCounts[index] , " index")
   
    setCounts(newCounts);
    updateTotalPrice(index, newCounts[index]);
    window.dispatchEvent(new Event('cartChanged'));


  }
  

  const decrement = (index: number) => {
    if (counts[index] > 1) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
    setinputValue((prev)=>prev-=1)

      setCounts(newCounts);
      updateTotalPrice(index, newCounts[index]);
      window.dispatchEvent(new Event('cartChanged'));
    }
  };

  const updateTotalPrice = (index: number, newCount: number) => {
    const updatedCart = [...cartproduct];
    updatedCart[index].count = newCount;
    updatedCart[index].totalPrice = updatedCart[index].price * newCount;
    setCartProduct(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    const sub = updatedCart.reduce(
      (total: number, item: any) => total + item.totalPrice,
      0,
    );
    setSubtotal(sub);
  };
  const removeItemFromCart = (index: number) => {
    Modal.confirm({
      title: 'Confirm',
      icon: null,
      content: 'Are you sure you want to remove this item from your cart?',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        const updatedCart = [...cartproduct];
        updatedCart.splice(index, 1);
        setCartProduct(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartChanged'));

        setchangeId(index);
      },
      onCancel() {
        // Do nothing
      },
    });
  };

const initivalueCount=(value: number)=>{
  setinputValue(value)
}

  return (
    <>
      {cartproduct.map((array: any, index: number) => {
          console.log(array.imageUrl, "")
      let filteredImage = (array.imageUrl &&array.imageUrl.length > 0) ? array.imageUrl.find((imageObject:any)=>imageObject.colorCode ==array.color) : " "
      
        return (
          
        <>
          <div
            className="p-2 rounded-md mt-5 bg-white shadow block md:hidden"
            key={index}
          >
            <div className="flex justify-between">
              <div className="flex gap-3">
                <Image
                  width={100}
                  height={100}
                  className="rounded-md"
                  src={filteredImage.imageUrl && filteredImage.imageUrl}
                  alt={array.name}
                />
                <div className="space-y-1">
                  <h1 className="text-14 font-semibold">{array.name}</h1>
                  <h2 className="text-12 font-medium">
                    Dhs. <span>{array.price}</span>.00 AED
                  </h2>
                  <h2 className="text-12 font-medium">
                    Color <span>{array.color}</span>
                  </h2>
                  <div className="flex gap-4 items-center">
                    <div className="border-2 p-2 flex justify-center items-center gap-1 w-24">
                      <FiMinus
                        className="cursor-pointer"
                        size={20}
                        onClick={() => decrement(index)}
                      />
                      {/* <input
                        className="w-5 hover:border hover:scale-105 text-center"
                        type="text"
                        value={counts[index] + inputValue }
                        onChange={(e)=>handleOnChange(index,e)}
                        
                      /> */}

<input
                        className="w-5 hover:border hover:scale-105 text-center numberInput"
                        type='number'
                        value={counts[index]}
                        onChange={(e)=>handleOnChange(index,e)}
                        
                      />
                      <FiPlus
                        className="cursor-pointer"
                        size={20}
                        onClick={() => increment(index)}
                      />
                    </div>
                    <MdDeleteOutline
                      onClick={() => removeItemFromCart(index)}
                      className="cursor-pointer"
                      size={20}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-bold">Total</h1>
                <h2 className="text-12 font-medium">
                  Dhs. <span>{array.totalPrice}</span>.00 AED
                </h2>
              </div>
            </div>
          </div>
        </>
        )
})}

      {cartproduct.length > 0 ? (
        <div className="flex flex-col mt-10 md:mt-20">
          <div className="-m-1.5 overflow-x-auto hidden md:block">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 overflow-x-scroll md:overflow-hidden table-auto">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase w-8/12"
                      >
                        PRODUCT
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase w-2/12"
                      >
                        QUANTITY
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-[12px] font-normal text-gray-500 uppercase w-2/12"
                      >
                        TOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {(cartproduct && cartproduct.length > 0) && cartproduct.map((array: any, index: number) => {
                      let color: string;
                      let filteredImage = array.imageUrl.find((imageObject:any)=>imageObject.colorCode ==array.color)
        
                      return (
                        <tr key={index}>
                          <td className="px-2 py-2 text-sm ">
                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                              <Image
                                className="rounded-md"
                                src={filteredImage.imageUrl && filteredImage.imageUrl}
                                width={100}
                                height={100}
                                alt={array.name}

                              />
                              <div className="space-y-2">
                                <Para14
                                  className="hover:underline transition duration-200"
                                  title={array.name}
                                />
                                <Para14 icon={'AED '} title={array.price} />

                                <p>
                                  Color:
                                  <span
                                    className="h-5 w-5 rounded-full px-2 mx-2"
                                    style={{
                                      backgroundColor: `#${array.color}`,
                                    }}
                                  >
                                    {' '}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-2  text-sm ">
                            <div className="flex gap- items-center">
                              <div className="border-2 p-2 flex justify-center items-center gap-2 w-24">
                                <FiMinus
                                  className="cursor-pointer"
                                  size={20}
                                  onClick={() => decrement(index)}
                                />
              

<input
                        className="w-5 hover:border hover:scale-105 text-center numberInput"
                        type='number'
                        value={counts[index]}
                        onChange={(e)=>handleOnChange(index,e)}
                        
                      />

                                <FiPlus
                                  className="cursor-pointer"
                                  size={20}
                                  onClick={() => increment(index)}
                                />
                              </div>
                              <MdDeleteOutline
                                onClick={() => {
                                  removeItemFromCart(index);
                                }}
                                className="cursor-pointer"
                                size={20}
                              />
                            </div>
                          </td>
                          <td className="px-2 ">
                            <Para14 icon={'AED '} title={array.totalPrice} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-end  border-t-2 mt-10 pt-5 space-y-2">
            <div className="flex gap-5 justify-end items-center">
              <Para16 className="poppins-thin" title={'Sub Total :'} />
              <Para16
                className="font-normal"
                icon={'AED .'}
                title={subtotal}
              />
            </div>
            <p className="text-[12px]">
              Tax included.{' '}
              <Link className="underline" href={'/shipping-policy'}>
                Shipping
              </Link>{' '}
              calculated at checkout.
            </p>
            <Link
              href={{
                pathname: `/checkout`,
              }}
            >
              <Button
                className="bg-black text-white w-80 p-3 mt-3"
                title={'Check out'}
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">Your Cart is empty</div>
      )}
    </>
  );
};

export default CartTable;
