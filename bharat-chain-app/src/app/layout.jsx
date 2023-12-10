import './globals.css'
import { Inconsolata, Source_Code_Pro } from 'next/font/google'
// import { useAnonAadhaar } from "anon-aadhaar-react";

const inconso = Inconsolata({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inconso',
})

const scpro = Source_Code_Pro({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-scpro',
})


export const metadata = {
  title: 'Bharat Chain',
  description: 'For ETHIndia\'23 by Team CookEthNotMeth',
}

export default function RootLayout({ children }) {
  // const [ready, setReady] = useState<boolean>(false);
  // const [anonAadhaar] = useAnonAadhaar(); // Add this line

  // useEffect(() => {
  //   console.log("Anon Aadhaar: ", anonAadhaar.status);
  //   setReady(true);
  // }, [anonAadhaar]); // Add `anonAadhaar` as a dependency

  return (
    <html lang="en">
      <body className={`${inconso.variable} ${scpro.variable} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
