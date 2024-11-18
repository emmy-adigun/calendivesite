import { Metadata } from 'next'
import GuestLayout2 from '@/components/layouts/GuestLayout2';
import { EventParams } from '@/hooks/types';

 
export const metadata: Metadata = {
  title: 'Event Schedules',
  description: 'This is for interview scheduling.',
}

export default function PaymentResponse({ params }:any) {
    return (
        <GuestLayout2>
            <section className='w-full'>
                
            </section>
        </GuestLayout2>
    )
}