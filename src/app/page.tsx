import type { Metadata } from 'next'
import GuestLayout from '@/components/layouts/GuestLayout';
import HomeData from './home-data/home-data';      

export default function Home() {
  return (
    <GuestLayout>
      <div className="w-full">
        <HomeData />
      </div>
    </GuestLayout>
  )
}
