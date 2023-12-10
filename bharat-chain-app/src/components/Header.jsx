import Image from 'next/image';
import Link from 'next/link';
// import { LogInWithAnonAadhaar } from "anon-aadhaar-react";


export default function Header() {
    return(
        <aside className='flex flex-col gap-5 p-5 font-scpro md:flex-row justify-between self-center justify-self-start items-center h-max w-9/12'>
            <div className='flex flex-row self-center gap-2'>
                <Image src={'/resources/flag.png'} alt='indian flag' width={50} height={50} priority={true}></Image>
                <a className='text-2xl self-center items-center font-bold' href='/'>Bharat Chain</a>
            </div>
            <nav className='flex font-bold flex-row gap-5 md:gap-10 md:text-2xl text-lg'>
                <Link className="hover:text-tusklet hover:animate-pulse text-white" href={'/'}>Signup</Link>
                {/* <LogInWithAnonAadhaar /> */}
            </nav>
        </aside>
    )
}