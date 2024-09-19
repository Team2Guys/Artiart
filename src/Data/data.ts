import * as Yup from 'yup';
import { Product, Category } from 'types/interfaces';

export const inputFields = [
  { name: 'name', type: 'text' },
  { name: 'description', type: 'text' },
  { name: 'price', type: 'number' },
  { name: 'discountPrice', type: 'number' },
];
export const withoutVariation = [
  { name: 'totalStockQuantity', type: 'number' },
];

export const Variation = [
  { name: 'variant', type: 'text' },
  { name: 'quantity', type: 'number' },
];

export const CategorinputFields = [{ name: 'name', type: 'text' }];

export const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
});

export const loginValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const categoryValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
});

export const initialValues: Product = {
  name: '',
  description: '',
  price: '',
  colors: [],
  totalStockQuantity: 0,
  variantStockQuantities: [],
  modelDetails: [],
  spacification: [],
  discountPrice: '',
  category: '',
};

export const categoryInitialValues: Category = {
  name: '',
};

export const loginInitialValue = {
  name: '',
  password: '',
};

export const generateSlug = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};



export const SEO_products = [
  {
    name: "iceberg-small-suction-cup",
    metaTitle: "Iceberg small suction cups, Unbreakable drinking glasses | ArtiArt",
    metaDescription: "Artiart's Unbreakable, Transparent Drinking Glasses. Buy Iceberg No Fall Party Mug, Small (280 ml) online on artiart.ae at the best prices.",
Script:{
  "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "ICEBERG SMALL – SUCTION CUP",
  "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717486823%2F2guysProducts%2Fxpigeoh6xm5njvwk6kcu.jpg&w=3840&q=75",
  "description": "Buy ARTIART Unbreakable Tritan Transparent Plastic Iceberg No Fall Party Mug, Small (280 ml)online on artiart.ae at best prices",
  "brand": {
    "@type": "Brand",
    "name": "ArtiArt"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "4",
    "ratingCount": "15"
  }
}
    
  },
  {
    name: "iceberg-big-suction-cup",
    metaTitle: "Iceberg Suction Cup, Unbreakable, Party Mug | ArtiArt",
    metaDescription: "Buy ARTIART Unbreakable Tritan Transparent Plastic Iceberg No Fall Party Mug, Big (430 ml) online on artiart.ae at the best prices.",
    Script:{
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ICEBERG BIG SUCTION CUP",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267046%2F2guysProducts%2Fw1qyngaybzswhdxot6cv.jpg&w=3840&q=75",
      "description": "Buy ARTIART Unbreakable Tritan Transparent Plastic Iceberg No Fall Party Mug, Big (430 ml)online on artiart.ae at best prices.",
      "brand": {
        "@type": "Brand",
        "name": "ArtiArt"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "4",
        "ratingCount": "22"
      }}
  },
  {
    name: "idea-cafe-suction-bottle",
    metaTitle: "Spill-Proof coffee mug, Idea Cafe Travel cup | ArtiArt",
    metaDescription: "Shop the spill-proof coffee cup! Our 340ml travel mug features patented technology to keep drinks hot or cold on the go."
    ,
 Script:{
"@context": "https://schema.org/", 
"@type": "Product", 
"name": "IDEA CAFE SUCTION BOTTLE",
"image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267694%2F2guysProducts%2Fhvj2d03rzrysvjn2oglh.jpg&w=3840&q=75",
"description": "Shop the spill-proof coffee cup! Our 340ml travel mug features patented technology to keep drinks hot or cold on-the-go.",
"brand": {
"@type": "Brand",
"name": "ArtiArt"
},
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "5",
"bestRating": "5",
"worstRating": "4",
"ratingCount": "20"
}
}

  },
  {
    name: "idea-cafe-suction-bottle-dubai-edition",
    metaTitle: "Spill-Proof suction bottle, Idea Cafe Travel cup | ArtiArt",
    metaDescription: "Experience the best Dubai Edition Artiart coffee cup! Shop our innovative 340ml spill-proof suction bottle, featuring Idea Café Travel's patented technology."
,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "IDEA CAFE SUCTION BOTTLE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267694%2F2guysProducts%2Fhvj2d03rzrysvjn2oglh.jpg&w=3840&q=75",
      "description": "Shop the  spill-proof coffee cup! Our 340ml travel mug features patented technology to keep drinks hot or cold on-the-go.",
      "brand": {
        "@type": "Brand",
        "name": "ArtiArt"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "4",
        "ratingCount": "20"
      }
    }
  },
  {
    name: "idea-cafe-suction-bottle-abu-dhabi-edition",
    metaTitle: "Spill-Proof suction bottle, Idea Cafe Travel cup | ArtiArt",
    metaDescription: "Experience the best Abu Dhabi Edition Artiart coffee cup! Shop our innovative 340ml spill-proof suction bottle, featuring Idea Café Travel's patented technology."
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "IDEA CAFE SUCTION BOTTLE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267694%2F2guysProducts%2Fhvj2d03rzrysvjn2oglh.jpg&w=3840&q=75",
      "description": "Shop the  spill-proof coffee cup! Our 340ml travel mug features patented technology to keep drinks hot or cold on-the-go.",
      "brand": {
        "@type": "Brand",
        "name": "ArtiArt"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "4",
        "ratingCount": "20"
      }
    }
  },
  {
    name: "deer-suction-bottle",
    metaTitle: "Deer Suction Bottle, Spill-proof water bottle | ArtiArt",
    metaDescription: "Stay hydrated with the Deer Suction Bottle, a spill-proof water bottle designed for effortless sipping. Shop Now and Enjoy leak free commute."
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "DEER SUCTION BOTTLE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715253514%2F2guysProducts%2Fsnf8ydk5n6hnvyd3hihf.jpg&w=3840&q=75",
      "description": "Stay hydrated with the Deer Suction Bottle, a spill-proof water bottle designed for effortless sipping. Shop Now and Enjoy leak free commute.",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "20"
      }
      }
      
  },
  {
    name: "artist-pp-suction-bottle",
    metaTitle: "Artist Suction Bottle, Thermal Stainless Steel, Travel Water Bottle | ArtiArt",
    metaDescription: "Take your favourite drinks on the go with our Artist Suction Bottle! Durable thermal stainless steel keeps drinks hot or cold for hours."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ARTIST PP SUCTION BOTTLE", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715236681%2F2guysProducts%2Fjted5hizwiewydfiqwbx.jpg&w=3840&q=75", 
      "description": "Take your favorite drinks on-the-go with our Artist Suction Bottle! Durable thermal stainless steel keeps drinks hot or cold for hours.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "20" 
      } 
      } 
      
  },
  {
    name: "doctor-suction-mug",
    metaTitle: "Spill Proof Coffee Mug, Suction Mug with Flip-Up Lid | ArtiArt",
    metaDescription: "Take your coffee anywhere with confidence! Our coffee mug features a spill-proof suction base and flip-up lid so you can sip without spills."
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "DOCTOR SUCTION MUG",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715257389%2F2guysProducts%2Fsp8gf0hc7okqzcddq9ph.jpg&w=3840&q=75",
      "description": "Take your coffee anywhere with confidence! Our coffee mug features a spill-proof suction base and flip-up lid, so you can sip without spills.",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "25"
      }
      }
      
  },
  {
    name: "seagull-suction-bottle",
    metaTitle: "Seagull Spill Proof Travel Bottle for hot and cold water | ArtiArt",
    metaDescription: "Shop our Seagull Spill Proof Travel Bottle and stay hydrated! Perfect for hot coffee or cold water."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "SEAGULL SUCTION BOTTLE", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715268934%2F2guysProducts%2Ftql9m46btz7vpjhzysel.jpg&w=3840&q=75", 
      "description": "Shop our Seagull Spill Proof Travel Bottle and stay hydrated! Perfect for hot coffee or cold water.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "20" 
      } 
      }
  },
  {
    name: "watermelon-seagull-suction-bottle",
    metaTitle: "Watermelon seagull suction bottle, Travel water Bottle | ArtiArt",
    metaDescription: "Buy our Watermelon Suction Bottle, a Seagull Spill Proof travel water bottle perfect for sipping. Shop now and enjoy."
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "WATERMELON SEAGULL SUCTION BOTTLE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1719841468%2F2guysProducts%2Fk7zn8nrypxzqiykofiam.jpg&w=3840&q=75",
      "description": "Buy our Watermelon Suction Bottle, a Seagull Spill Proof travel water bottle that's perfect for sipping. Shop now and enjoy.",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "22"
      }
      }
      
  },
  {
    name: "antelope-suction-bottle",
    metaTitle: "Antelope spill-proof travel water bottle with Flip-up lid | ArtiArt",
    metaDescription: "Refresh your routine with our Artiart Antelope spill-proof travel water bottle. Durable, leakproof, and easy to use. Shop now and take it with you."
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ANTELOPE SUCTION BOTTLE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715236057%2F2guysProducts%2Ft8vgbr3bjehmmkgfob7n.jpg&w=3840&q=75",
      "description": "Refresh your routine with our Artiart Antelope spill proof travel water bottle. Durable, leak proof and easy to use. Shop now and take it with you.",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "20"
      }
      }
      
  },
  {
    name: "dumbo-suction-mug",
    metaTitle: "Dumbo Spill Proof Travel Mug, Insulated Coffee Mug | ArtiArt",
    metaDescription: "Our Dumbo Spill Proof Travel Mug is the perfect companion for your coffee routine. Insulated to keep your drinks hot or cold. Buy now and sip with joy!"
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "DUMBO SUCTION MUG", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717480792%2F2guysProducts%2Fqy14jip0b9yrsrlbklav.jpg&w=3840&q=75", 
      "description": "Our Dumbo Spill Proof Travel Mug is the perfect companion for your coffee routine. Insulated to keep your drinks hot or cold. Buy now and sip with joy!", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "25" 
      } 
      }
  },
  {
    name: "elephant-suction-mug",
    metaTitle: "Elephant Insulated Coffee Mug with Flip-up Lid | ArtiArt",
    metaDescription: "From dawn till dusk, our Elephant Spill Proof Travel Mug keeps your drinks hot or cold and your hands free from spills. Shop now and start your day off right."
  
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ELEPHANT SUCTION MUG", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715258871%2F2guysProducts%2Fxjeggcnwxvmbs3ygmyzj.jpg&w=3840&q=75", 
      "description": "From dawn till dusk, our Elephant Spill Proof Travel Mug keeps your drinks hot or cold and your hands free from spills. Shop now and start your day off right.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "30" 
      } 
      } 
      
  },
  {
    name: "grace-suction-mug",
    metaTitle: "Grace Spill Proof Suction Mug for Tea and Coffee | ArtiArt",
    metaDescription: "Wherever your day takes you, our Grace Spill Proof Travel Suction Mug keeps your tea or coffee hot and secure. Buy now and enjoy every sip."
  
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "GRACE SUCTION MUG", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481167%2F2guysProducts%2Fqs5yjzjwng85ddgl5wfb.jpg&w=3840&q=75", 
      "description": "Wherever your day takes you, our Grace Spill Proof Travel Suction Mug keeps your tea or coffee hot and secure. Buy now and enjoy every sip.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "25" 
      } 
      } 
      
  }
    ,
  {
    name: "ostrich-suction-bottle",
    metaTitle: "Ostrich Spill Proof Travel Suction Bottle | ArtiArt",
    metaDescription: "Refresh your routine with our Artiart Ostrich spill-proof travel bottle. Durable, leakproof, and easy to use. Shop now and take it with you."
 
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "OSTRICH SUCTION BOTTLE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715268239%2F2guysProducts%2Fb9k71cluzarxlh61mbqc.jpg&w=3840&q=75",
      "description": "Refresh your routine with our Artiart Ostrich spill proof travel bottle. Durable, leak proof and easy to use. Shop now and take it with you.",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "20"
      }
      }
       },
  {
    name: "vitality-sky-suction-mug",
    metaTitle: "Vitality Sky Suction Coffee mug with Airtight lid | ArtiArt",
    metaDescription: "Begin your day with a perfect coffee mug. Our Vitality Sky Suction Coffee Mug keeps your coffee safe. Shop now!"
  
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "VITALITY SKY SUCTION MUG", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715270498%2F2guysProducts%2Fieamhuj8bhlkti3gf5ri.jpg&w=3840&q=75", 
      "description": "Begin your day with with a perfect coffee mug. Our Vitality Sky Suction Coffee Mug keeps your coffee safe. Shop now!", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "20" 
      } 
      }
  
  
  },
  {
    name: "zebra-suction-mug",
    metaTitle: "Zebra Travel Mug, Coffee Mug with Flip Cover Lid | ArtiArt",
    metaDescription: "Take your coffee ritual to new places with Zebra Travel Mug, designed with a practical flip cover lid and durable design that's perfect for hot or cold drinks."
 
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ZEBRA SUCTION MUG", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715270967%2F2guysProducts%2Fircpufcagxt32qgcal0v.jpg&w=3840&q=75", 
      "description": "Take your coffee ritual to new places with Zebra Travel Mug, designed with a practical flip cover lid and durable design that's perfect for hot or cold drinks.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "15" 
      } 
      } 
       },
  {
    name: "artist-steel-suction-bottle",
    metaTitle: "Artist Suction Bottle, Thermal Stainless Steel, Travel Water Bottle | ArtiArt",
    metaDescription: "Take your favourite drinks on the go with our Artist Suction Bottle! Durable thermal stainless steel keeps drinks hot or cold for hours."
  
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ARTIST STEEL SUCTION BOTTLE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715236969%2F2guysProducts%2Ffrzpvcegioxd4qqbogxv.jpg&w=3840&q=75",
      "description": "Take your favorite drinks on-the-go with our Artist Suction Bottle! Durable thermal stainless steel keeps drinks hot or cold for hours.",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "22"
      }
      }
      
    
    },
  {
    name: "party-suction-cup-set-of-6-pcs",
    metaTitle: "Party Suction Cup, Unbreakable Set of 6 cups | ArtiArt",
    metaDescription: "Get the party started with our unbreakable Party Suction Cup set of 6! Durable, fun, and perfect for any celebration. Buy now and enjoy."
  
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "PARTY SUCTION CUP | Set of 6 Pcs.",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715268491%2F2guysProducts%2Frukioe2pua1hla9dta2k.jpg&w=3840&q=75",
      "description": "Get the party started with our unbreakable Party Suction Cup set of 6! Durable, fun, and perfect for any celebration. Buy now and enjoy",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "25"
      }
      }
      },
  {
    name: "butterfly-thermal-suction-bottle",
    metaTitle: "Butterfly Thermal Water Bottle, Vacuum Flask Travel Bottle | ArtiArt",
    metaDescription: "Enjoy perfect temperatures every time with our Butterfly Thermal Water Bottle, a premium vacuum flask travel bottle for hot and cold drinks. Shop Now!"
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "BUTTERFLY THERMAL SUCTION BOTTLE", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715246604%2F2guysProducts%2Fpo33q6pqzxsqaxbzj8vq.jpg&w=3840&q=75", 
      "description": "Enjoy perfect temperatures every time with our Butterfly Thermal Water Bottle, a premium vacuum flask travel bottle for hot and cold drinks.Shop Now!", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "30" 
      } 
      } 
      
  },
  {
    name: "whale-suction-mug",
    metaTitle: "Whale Travel Mug, Coffee mug with Flip Cover Lid | ArtiArt",
    metaDescription: "Take your coffee ritual to new places with Whale Travel Mug, designed with a practical flip cover lid and durable design that's perfect for hot or cold drinks."
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "WHALE SUCTION MUG",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715270756%2F2guysProducts%2Fn6zoa7u0lbub7agyhe3z.jpg&w=3840&q=75",
      "description": "Take your coffee ritual to new places with Whale Travel Mug, designed with a practical flip cover lid and durable design that's perfect for hot or cold drinks.",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "20"
      }
      }
      
  },
  {
    name: "cloud-thermal-suction-bottle",
    metaTitle: "Cloud Thermal Water Bottle, Vacuum Flask Travel Bottle | ArtiArt",
    metaDescription: "Perfect temperatures, every time, anywhere! Get your Cloud Thermal Water Bottle now and start sipping in comfort."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "CLOUD THERMAL SUCTION BOTTLE", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715247206%2F2guysProducts%2Fyqjh9pmqvdz8s5k2dki1.jpg&w=3840&q=75", 
      "description": "Perfect temperatures, every time, anywhere! Get your Cloud Thermal Water Bottle now and start sipping in comfort.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "20" 
      } 
      } 
      
  },
  {
    name: "guardian-thermal-suction-bottle",
    metaTitle: "Guardian Thermal Water Bottle, Vacuum Flask Travel Bottle | ArtiArt",
    metaDescription: "Sip happy, anywhere! Guardian Thermal Water Bottle - your perfect travel companion for hot and cold drinks. Shop Now!"
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "GUARDIAN THERMAL SUCTION BOTTLE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715266846%2F2guysProducts%2Fnzlock9zt5qcwuv3mnoo.jpg&w=3840&q=75",
      "description": "Sip happy, anywhere! Guardian Thermal Water Bottle - your perfect travel companion for hot and cold drinks. Shop Now!",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "15"
      }
      }
      
  },
  {
    name: "vitality-hill-thermal-suction-mug",
    metaTitle: "Vitality Hill thermal Mug, Coffee mug with Flip Cover lid | ArtiArt",
    metaDescription: "Savour the flavour with the Vitality Hill Thermal Mug, a coffee mug with a protective flip-cover lid for on-the-go enjoyment. Shop now and Enjoy!"
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "VITALITY HILL THERMAL SUCTION MUG",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715269510%2F2guysProducts%2Ftyhrr52kfuq4xlq0e3px.jpg&w=3840&q=75",
      "description": "Savor the flavor with Vitality Hill Thermal Mug, a coffee mug with a protective flip cover lid for on-the-go enjoyment. Shop now and Enjoy!",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "22"
      }
      }
      
  },
  {
    name: "swan-carafe-with-child-lock",
    metaTitle: "Swan Tea Flask, Vaccum Insulated Tea Pot | Artiart",
    metaDescription: "Pour perfection every time with our Swan Tea Flask, a vacuum-insulated teapot that keeps your tea hot and fresh. Buy now and start pouring!"
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "SWAN CARAFE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1720176295%2F2guysProducts%2Fqelssyumnpfm8zpdye2a.webp&w=3840&q=75",
      "description": "Pour perfection every time with our Swan Tea Flask, a vacuum-insulated tea pot that keeps your tea hot and fresh. Buy now and start pouring!",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "15"
      }
      }
      
  }

];
