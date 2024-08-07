import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { fruits } from "../../../Data/fruits";
import HomeSectionCard from "../navigation/HomeSectionCard/HomeSectionCard";
import { useNavigate } from "react-router-dom";

const product = {
  name: "100g | 250g | 500g",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Fresh", href: "#" },
    { id: 2, name: "Fruits", href: "#" },
  ],
  images: [
    {
      src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/24d23c9b-6dcd-4b3e-bc23-9301fde0ca64_425x425.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d91b15ab-db7b-4bf3-81a5-d48a239004c0_425x425.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d91b15ab-db7b-4bf3-81a5-d48a239004c0_425x425.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/24d23c9b-6dcd-4b3e-bc23-9301fde0ca64_425x425.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
   
    { name: "100g", inStock: true },
    { name: "250g", inStock: true },
    { name: "500g", inStock: true },
   
  ],
  description:
    'An avocado is a bright green fruit with a large pit and dark leathery skin. Its also known as alligator pear or butter fruit. Avocados are a favorite of the produce section. They are the go-to ingredient for guacamole dips. And they re turning up in everything from salads and wraps to smoothies and even brownies. ',
  highlights: [
    "485 milligrams of potassium",
    "81 micrograms of folate",
    "0.257 milligrams of vitamin B6",
    "10 milligrams of vitamin C",
    "2.07 milligrams of vitamin E",
  ],
  details:
    'Some average prices of avocados include  Walmart – $0.68  Kroger – $1.25 Trader Joes "Teeny Tiny Avocados" – $2.99 (6 count)',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const navigate=useNavigate();
  const handleAddToCart=()=>{
    navigate("/cart")
  }
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 px-4 pt-10 ">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overFlow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 maxt-auto maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg  lg:text-xl font-semibold text-gray-900">
              Avocado
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {" "}
                Pack 3Pc (Approx 550-700G)
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 item-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">199</p>
                <p className="opacity-50 line-through">211</p>
                <p className="text-green-600 font-semibold">5% Off</p>
              </div>
              {/* Reviews */}
              <div className="mt-6">
                <div className="flex item-center space-x-3"><Rating name="read-only" value={5.6} readOnly />
                 <p className="opacity-50 text-sm">56540 Rating</p>
                 <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">21434 Reviews</p>
                </div>
              
              </div>

              <form className="mt-10">
                {/* Colors */}
                

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Weight</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Weight guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a Weight
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-400"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <Button onClick={handleAddToCart} variant="contained" sx={{px:"2rem",py:"1rem", bgcolor:"#9155fd"}}>
                  Add to Card
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ratimg and reviews*/}
        <section>
          <h1 className="font-semibold text-lg pb-4">Recent Review & Rating</h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1,1,1].map((item)=><ProductReviewCard />)}
                </div>
              </Grid>
             <Grid item xs={5}>
              <h1 className="text-xl font-semibold pd-2">Product Rating</h1>
              <div className="flex item-center space-x-3">
                <Rating value={4.6} precision={.5} readOnly/>
                <p className="opacity-60"> 5343 Ratings</p>
              </div>
              <Box className="mt-5 space-y-3">
                <Grid container  alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Excellent</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant="determinate" value={60} color="success"/>
                  </Grid>
                </Grid>

                <Grid container  alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Very Good</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant="determinate" value={45} color="success"/>
                  </Grid>
                </Grid>


                <Grid container  alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Good</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant="determinate" value={30} color="success"/>
                  </Grid>
                </Grid>


                <Grid container  alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Average</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant="determinate" value={20} color="warning"/>
                  </Grid>
                </Grid>

                <Grid container  alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Poor</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant="determinate" value={10} color="error"/>
                  </Grid>
                </Grid>
              </Box>
             </Grid>

            </Grid>

          </div>
        </section>
        {/*similer product*/}
        <section className="pt-10">
          <h1 className="py-5 text-xl font-bold">Similer Products</h1>
          <div className="flex flex-wrap space-y-5">
            {fruits.map((item)=><HomeSectionCard product={item} />)}
          </div>

        </section>
      </div>
    </div>
  );
}
