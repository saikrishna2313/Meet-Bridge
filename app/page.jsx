import Link from "next/link"
import { Button } from "../components/ui/button"
import Image from "next/image"


const page = () => {
  return (
    <section className='h-screen px-20 flex justify-center items-center w-full'>
       <div className="flex justify-start flex-1 flex-col items-start gap-5">
       <h1 className="text-6xl font-bold text-green-400">
       Simplify Your Scheduling
       </h1>
       <p className="text-slate-800">
       Schedulrr helps you manage your time effectively. Create events, set your availability, and let others book time with you seamlessly.
       </p>
       <Button><Link href="/events">Get Started</Link></Button>
       </div>
      <div className="flex-1 flex justify-center px-10 items-center">
       <Image width={150} height={150} className="h-full w-[440px]" unoptimized={true} src={"https://schedulrr.vercel.app/_next/image?url=%2Fposter.png&w=1920&q=75"}/>
      </div>
    </section>
  )
}

export default page