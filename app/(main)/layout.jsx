"use client"
import { useUser } from "@clerk/nextjs"
import {BarLoader} from 'react-spinners'
import Sidebar from '../maincomponents/Sidebar'
import { usePathname } from "next/navigation"
import Card, { CardContent } from '../../components/ui/card'
const RootLayout = ({children}) => {
    const {isLoaded,user}=useUser();

    const pathname=usePathname();
  return (
  <>
     {
        !isLoaded && <BarLoader width={"100%"} color="#36d7b7" />
     }
    <section className="w-full flex h-screen overflow-hidden">
      <div className="w-[20%] h-full">
      <Sidebar/>
      </div>
      <div className="w-[80%] px-20 py-10 h-full">
        <section className="w-full my-4">
          {
            isLoaded&&<p> Welcome, {user?.firstName} 🤗</p>
          }
           {
            isLoaded &&  <h1 className="capitalize text-4xl font-bold">{pathname.slice(1)}</h1>
           }
        </section>
      {
        isLoaded &&<>{children}</>
      }
      </div>
    </section>
    
    </>
  )
}

export default RootLayout