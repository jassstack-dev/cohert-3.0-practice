import React, { useContext } from "react";
import { NavLink, useParams } from "react-router";
import { MyStore } from "../context/MyContext";

const Home = () => {

   const { category:selectedcategory } = useParams();
    
   

   const {products, setProducts} = useContext(MyStore)

    let category = products.reduce((acc, val)=>{
        if(!acc.includes(val.category)){
            acc.push(val.category)
        }
        return acc
    },[])

 
  
    
    const categoryImages = {
  electronics:
    "https://images.unsplash.com/photo-1498049794561-7780e7231661",

  jewelery:
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",

  "men's clothing":
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",

  "women's clothing":
    "https://images.unsplash.com/photo-1483985988355-763728e1935b",
};

    
    const categoryCount = category.map((val)=>{
        const count = products.filter((product)=>{
          return  product.category === val
        }).length

        return {
            category:val,
            count :count,
            
            
        }
    })

   let FeaturedProducts = products.filter((val)=>{
    return val.rating.rate > 4.5
   })


   

    

    // console.log(categoryCount)

    const filteredProducts = selectedcategory ? products.filter((product)=>{
        return product.category === selectedcategory;
    }) : products

  

  return (
    <div className="min-h-screen bg-[#f7f7f5]">

      {/* Hero */}
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-black px-8 py-12 text-white md:px-14 lg:grid-cols-2 lg:py-16">

          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-300">
              New Collection 2026
            </span>

            <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Everything you need.
              <span className="text-gray-500"> All in one place.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
              Discover quality products, modern essentials and everyday
              favourites — carefully selected for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <NavLink
                to="/products"
                className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Shop Products →
              </NavLink>

              <NavLink
                to="/about"
                className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discover More
              </NavLink>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="JassStore collection"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-white p-5 text-black shadow-2xl">
              <p className="text-2xl font-bold">10K+</p>
              <p className="mt-1 text-xs text-gray-500">
                Happy Customers
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Browse
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950">
                Shop by Category
              </h2>
            </div>

            <NavLink
              to="/products"
              className="hidden text-sm font-semibold text-gray-900 hover:underline sm:block"
            >
              View all →
            </NavLink>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

            {/* Category */}
            {
              categoryCount.map((val)=>{
                return <NavLink
              to={`products/${val.category}`}
              className="group relative h-56 overflow-hidden rounded-2xl"
            >
              <img
                src={categoryImages[val.category]}
                alt="Accessories"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-lg font-semibold">{val.category}</p>
                <p className="mt-1 text-xs text-white/70">{val.count} Products</p>
              </div>
            </NavLink>
              })
            }

            

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Handpicked
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950">
                Featured Products
              </h2>

              <p className="mt-2 text-gray-500">
                Some of our most loved products.
              </p>
            </div>

            <NavLink
              to="/products"
              className="hidden rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold sm:block"
            >
              View Products
            </NavLink>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Product 1 */}
{
  FeaturedProducts.map((val)=>{
    return <NavLink to={`products/${val.category}/${val.id}`} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={val.image}
                  alt="Wireless Headphones"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold">
                  Popular
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-400">{val.category}</p>

                <h3 className="mt-1 font-semibold text-gray-900">
                  {val.title}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold">₹{val.price}</p>

                  <button className="rounded-xl bg-black px-4 py-2 text-xs font-semibold text-white">
                    Add
                  </button>
                </div>
              </div>
            </NavLink>

  })
}
            
            
           
            

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-950">10K+</h3>
            <p className="mt-2 text-sm text-gray-400">Happy Customers</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-950">500+</h3>
            <p className="mt-2 text-sm text-gray-400">Products</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-950">25+</h3>
            <p className="mt-2 text-sm text-gray-400">Categories</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-950">4.9/5</h3>
            <p className="mt-2 text-sm text-gray-400">Average Rating</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-black px-8 py-16 text-center text-white md:px-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Start Shopping
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Find something you’ll love.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Explore our collection and discover products made for your
            everyday life.
          </p>

          <NavLink
            to="/products"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Explore Products →
          </NavLink>

        </div>
      </section>

    </div>
  );
};

export default Home;