'use client'
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href , children}) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    
    return (
        <Link className={`${isActive ? "bg-blue-500 text-white rounded-2xl":""}`} href={href}>{children}</Link>
    );
};

export default NavLink;