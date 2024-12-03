'use client'

import Navigation from '../components/Navigation.jsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Book() 
{
    const currentPath = usePathname()

    return (
        <Navigation>
            <ul className="flex gap-12 text-xl">
                <li className="transition-text duration-150 ease-in hover:text-orange-300 hover:border-b-2 border-b-orange-300">
                    <Link href={'/'} className={currentPath === '/' ? 'border-b-2 border-orange-300 text-orange-300' : 'border-none'}>Home</Link>
                </li>
                <li className="transition-text duration-150 ease-in hover:text-orange-300 hover:border-b-2 border-b-orange-300">
                    <Link href={'/program'} className={currentPath === '/program' ? 'border-b-2 border-orange-300 text-orange-300' : 'border-none'}>Program</Link>
                </li>
                <li>
                    <Link href={'/book'} className={currentPath === '/book' ? 'border-b-2 border-orange-300 text-orange-300' : 'border-none'}>Book</Link>
                </li>
            </ul>
        </Navigation>
    )
}