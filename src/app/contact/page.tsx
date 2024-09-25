import type { Metadata } from 'next'
import { Contact } from './Contact'
 
export const metadata: Metadata = {
  title: 'Contact ARTIART UAE - Get in Touch',
  description: `
Get in touch with ARTIART UAE for sales inquiries, product support, order issues, or general feedback.
`,
}

const Page = () => {
return (
<Contact/>

)}

export default Page;