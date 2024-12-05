import type { Metadata } from 'next'
import GuestLayout from '@/components/layouts/GuestLayout';
import LemonadeDiariesData from './lemonade-diaries-data';
import GuestLayout2 from '@/components/layouts/GuestLayout2';

export default function LatsTheDj() {
  return (
    <GuestLayout2>
        <div className="w-full">
            <LemonadeDiariesData />
        </div>
    </GuestLayout2>
  )
}