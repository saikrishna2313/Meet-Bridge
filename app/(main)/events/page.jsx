"use client"

import { Suspense, useEffect, useState } from "react"
import { getUserEvents } from "@/actions/action"
import EventCard from '../../maincomponents/EventCard'

const page = () => {
  const [events,setEvents]=useState(null);
  const [username,setUserame]=useState(null);
  const fetchUserEvents=async()=>{
    const { events, username } = await getUserEvents();
    setEvents(events);
    setUserame(username);
  }
  useEffect(()=>{
    fetchUserEvents();

  },[])
  return (
<Suspense fallback={<div>Loading events...</div>}>

      
      <section className="w-full h-full">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {
          (events&&events.length === 0)&&<p>You haven&apos;t created any events yet.</p>
        }
        {events && events?.map((event) => (
          <EventCard key={event.id} event={event} username={username} />
        ))}
      </div>
      </section>
   
    </Suspense>
    
  )
}

export default page

