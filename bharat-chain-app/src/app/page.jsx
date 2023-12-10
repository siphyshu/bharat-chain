import Header from '@/components/Header'
import Image from 'next/image'
import Link from "next/link"
// import { AnonAadhaarProvider } from "anon-aadhaar-react";

// import Header from "@/components/Header"

export const metadata = {
  title: 'Bharat Chain',
  description: 'Bharat Chain for ETHIndia\'23 by Team CookEthNotMeth',
}

const app_id = process.env.NEXT_PUBLIC_APP_ID || "";


export default function Home() {
  return (
    // <AnonAadhaarProvider _appId={app_id} _isWeb={false}>
      <div className={'flex flex-col select-none font-scpro h-max min-h-screen w-screen p-3'}>
        <Header />
        <main className={'flex flex-col h-max w-0.5'}>
          {/* <h1>Home</h1> */}
        </main>
      </div>
    // {/* </AnonAadhaarProvider> */}
  )
}
