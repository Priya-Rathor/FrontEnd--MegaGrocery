
const products = [
    {
      id: 1,
      name: 'Exotic Fruits',
      href: '#',
      price: '$48',
      imageSrc: 'https://gnbdevcdn.s3.ap-southeast-1.amazonaws.com/Images/Category/Big/Exotic+Fruits.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Meat, Poultry & Seafood',
      href: '#',
      price: '$35',
      imageSrc: 'https://gnbdevcdn.s3.ap-southeast-1.amazonaws.com/Images/Category/Big/Meats%2C+Poultry+%26+Seafood.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Dairy',
      href: '#',
      price: '$89',
      imageSrc: 'https://gnbdevcdn.s3.ap-southeast-1.amazonaws.com/Images/Category/Big/Bakery+%26+Dairy.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Artisanal Breads',
      href: '#',
      price: '$35',
      imageSrc: 'https://gnbdevcdn.s3.ap-southeast-1.amazonaws.com/Images/Category/Big/Fresh+Artisanal+Breads.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Grocery',
        href: '#',
        price: '$35',
        imageSrc: 'https://gnbdevcdn.s3.ap-southeast-1.amazonaws.com/Images/Category/Big/Grocery.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },

      {
        id: 6,
        name: 'Health & Wellness',
        href: '#',
        price: '$35',
        imageSrc: 'https://gnbdevcdn.s3.ap-southeast-1.amazonaws.com/Images/Category/Big/Health+%26+Wellness.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
          id: 7,
          name: 'Breakfast, Jams, Honey & Spreads',
          href: '#',
          price: '$35',
          imageSrc: 'https://gnbdevcdn.s3.ap-southeast-1.amazonaws.com/Images/Category/Big/Breakfast%2C+Jams%2C+Honey+%26+Spreads.png',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },

        {
            id: 8,
            name: 'Delicatessen & Cheese',
            href: '#',
            price: '$35',
            imageSrc: 'https://gnbdevcdn.s3.ap-southeast-1.amazonaws.com/Images/Category/Big/Delicatessen+%26+Cheese.png',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
         
  ]
  
  export default function HomeLast() {
    return (
      <div className="bg-white">
        <p className="mt-1 text-2xl font-medium text-gray-900 text-center">---------- SHOP BY CATEGORY ----------</p>
        <div className="mx-auto max-w-2xl px-2 py-8 sm:px-3 sm:py-12 lg:max-w-7xl lg:px-4">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-full bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-70 "
                  />
                </div>
                <h3 className="mt-4 text-lg  text-gray-700 text-center">{product.name}</h3>
                
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  