import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
export default function Login() {
  return (
    <section className='m-auto w-1/2'>
        <form>
            <ul>
                <Input type='text' userid='user' place='username'/>
                <Input type='email' userid='email' place='email '/>
                 <Button status='Login'/> 
            </ul>
                
                
            
        </form>
    </section>
  )
}
