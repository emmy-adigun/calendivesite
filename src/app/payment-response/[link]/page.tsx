import { Metadata } from 'next'
import GuestLayout2 from '@/components/layouts/GuestLayout2';
import PaymentResponseData from './payment-response-data';
import { EventParams } from '@/hooks/types';

 
export const metadata: Metadata = {
  title: 'Event Schedules',
  description: 'This is for interview scheduling.',
}

export default function PaymentResponseLink({ params }:any) {
    return (
        <GuestLayout2>
            <section className='w-full'>
                <PaymentResponseData params={params}/>
            </section>
        </GuestLayout2>
    )
}