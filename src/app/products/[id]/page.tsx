import type { Metadata, ResolvingMetadata } from 'next'
import Category from "./Category";
import { Categories_MetaData } from 'Data/data';
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params}: Props,
): Promise<Metadata> {

  let Category = Categories_MetaData.find((item)=>item["Category"] == params.id)

  console.log(Category, "Category")
  return {
    title: Category?.['Meta Title'],
    description: Category?.['Meta Description']
  }

}

export default function Products({ params }: { params: { id: string } }) {
  const parsedCategory = params.id ? params.id : null;


return (
<Category parsedCategory={parsedCategory}/>
  
)}

 