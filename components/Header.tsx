
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreDropdown from './GenreDropdown'

export default function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className='mr-10'>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/640px-Disney%2B_logo.svg.png"
          alt='Disney logo'
          width={120}
          height={100}
          className='cursor-pointer invert'
        />
      </Link>

      <div className='flex space-x-2'>
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  )
}
