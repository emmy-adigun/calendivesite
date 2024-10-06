import Link from 'next/link';
import Head from 'next/head';
import { Metadata } from 'next'
import GuestLayout2 from '@/components/layouts/GuestLayout2';
import TraingCalendarData from './training-calendar-data';

 
export const metadata: Metadata = {
  title: 'Training  Calendar',
  description: 'This is otpimum training calendar',
}

export default function TrainingCalendar() {
    return (
        <GuestLayout2>
            <section className='w-full'>
                <TraingCalendarData />
            </section>
        </GuestLayout2>
    )
}