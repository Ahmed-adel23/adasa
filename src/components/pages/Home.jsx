import React from 'react'
import Hero from '../Home/Hero'
import FeaturedPosts from '../Home/FeaturedPosts'
import Categories from '../Home/Categories'
import LatestPosts from '../Home/LatestPosts'
import Newsletter from '../Home/Newsletter'

export const Home = () => {
  return (
    <>
    <Hero />
    <FeaturedPosts />
    <Categories />
    <LatestPosts />
    <Newsletter />
    </>
  )
}
