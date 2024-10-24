import type { Metadata } from 'next'
import GuestLayout from '@/components/layouts/GuestLayout';
import LatsTheDjData from './lats-the-dj-data'   
import GuestLayout2 from '@/components/layouts/GuestLayout2';

export default function LatsTheDj() {
  return (
    <GuestLayout2>
        <div className="w-full">
            <LatsTheDjData />
        </div>
    </GuestLayout2>
  )
}