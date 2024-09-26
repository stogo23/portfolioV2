import React from 'react'
import { CONTACTS } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900'>
        <h2 className='my-10 text-center text-4xl text-white'>Contact</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACTS.email}</p>
            <p className='my-4'>{CONTACTS.telephone}</p>
            <a href="#">{CONTACTS.email}</a>
        </div>
    </div>
  )
}

export default Contact
