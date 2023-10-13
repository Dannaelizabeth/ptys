import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div>
        <div>
          <Image src='/images/' alt='' fill  />
        </div>
        <div>
          <h1>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button>
            <span>Sign in with google</span>
          </button>
          <button>
            <span>Sign in with facebook</span>
          </button>
          <p>Have a problem?
            <Link href='/'>Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage