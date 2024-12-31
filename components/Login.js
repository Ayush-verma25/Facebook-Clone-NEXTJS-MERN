import { signIn } from 'next-auth/client'
import Image from 'next/image'
import React from 'react'


const Login = () => {
    return (
        <div className='grid place-items-center h-screen'>
            <Image src="https://links.papareact.com/t4i" height={400} width={400} objectFit='contain' />
            <h1 onClick={signIn} className='p-5 bg-blue-500 text-center rounded-full text-white cursor-pointer'>Login With Facebook</h1>
        </div>
    )
}

export default Login