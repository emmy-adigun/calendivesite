import { Metadata } from 'next'
import GuestLayout2 from '@/components/layouts/GuestLayout2';
import EventSchedulesData from './event-schedules-data';
import { EventParams } from '@/hooks/types';

 
export const metadata: Metadata = {
  title: 'Event Schedules',
  description: 'This is for interview scheduling.',
}

export default function EventSchedules({ params }:EventParams) {
    return (
        <GuestLayout2>
            <section className='w-full'>
                <EventSchedulesData params={params}/>
            </section>
        </GuestLayout2>
    )
}