import Link from 'next/link';
import Head from 'next/head';
import { Metadata } from 'next'
import GuestLayout2 from '@/components/layouts/GuestLayout2';


 
export const metadata: Metadata = {
  title: 'Event Schedules',
  description: 'This is for interview scheduling.',
}

export default function EventSchedules() {
    return (
        <GuestLayout2>
            <section className='w-full'>
               
            </section>
        </GuestLayout2>
    )
}