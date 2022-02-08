import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-zinc-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer bg-gradient-to-r from-indigo-200 to-gray-600  bg-clip-text text-4xl font-bold text-transparent">
              Matthew Raymond
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
