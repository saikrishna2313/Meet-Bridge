"use client"
import { BarChart, Calendar, Clock, Users } from 'lucide-react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import React from 'react'
const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/meetings", label: "Meetings", icon: Users },
    { href: "/availability", label: "Availability", icon: Clock },
  ];

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <section className='w-full border-r-4 rounded-r-md py-10 flex flex-col h-full'>
        
    <ul className='flex flex-col gap-y-3'>
        {
            navItems.map((item)=>{
                return(
                    <li className='shadow-md' key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-4 text-gray-700  hover:bg-gray-100 ${
                        pathname === item.href ? "bg-blue-100" : ""
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </Link>
                  </li>
                )
            })
        }
    </ul>
    </section>
  )
}

export default Sidebar