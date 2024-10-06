'use client'
import './globals.css';
export default function GlobalError({error, reset}: {error: Error & { digest?: string },  reset: () => void}) {
  return (
    <html>
      <body>
        <div className="preloader">
          <h2 className="text-center text-red-700">Something went wrong!</h2>
          <button className="hover:bg-white hover:text-red-700 text-white py-2 px-4 rounded-btn" onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  )
}
