import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
export default function SignUp() {
  return (
    <div className='m-auto w-1/2'>
        <form>
            <ul>
                <Input type='text' name='user' userid='user' place='your username'/>
                <Input type='email' name='email'  userid='email' place='your email address'/>
                <Input type='password' name='pwd' userid='pwd' place='your password'/>
            </ul>
            
                <Button status='SignUp'/>
            
        </form>
    </div>
  )
}
