
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import UserMenu from './UserMenu'
import { Button } from '../../components/ui/button'
import {IsUserIn} from '../../lib/UserIn';


const Navbar =async () => {
  await IsUserIn();
  return (
    <nav className='w-full px-20 shadow-md py-3 flex justify-between items-center'>
    <Link href="/" className='text-2xl font-bold'>MeetBridge.</Link>
    <div className='flex justify-center gap-4 items-center'>
     <div>
     <SignedOut>
     <Button><Link href="/sign-in">Login</Link></Button>
     </SignedOut>
     <SignedIn>
     <Button><Link href={'/events/createEvent'}>Create Event</Link></Button>
     </SignedIn>
     </div>
     <UserMenu/>
    </div>
    </nav>
  )
}

export default Navbar