
import type { Metadata } from 'next'
import Products from './Products';



export const metadata: Metadata = {
  title: ' Shop Cups, Mugs, Bottles, and More | Artiart Suction Products',
  description:`Shop Artiart's suction cups, mugs, bottles & travel essentials collection. Durable, anti-spill leak-proof & insulated for hot and cold drinks with suction technology. `,
}
export default function Page() {

  return (
 <Products/>
  );
}
