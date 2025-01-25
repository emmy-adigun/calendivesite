import MyCarousel from './aima-data'   
import GuestLayout2 from '@/components/layouts/GuestLayout2';

export default function Aima() {
  return (
    <GuestLayout2>
        <div className="w-full">
            <MyCarousel />
        </div>
    </GuestLayout2>
  )
}