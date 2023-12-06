import ProgressBar from '@/components/ProgressBar'
import Section from '@/components/Section'
import React from 'react'

export default function Skills() {
  return (
    <div className='bg-indigo-950  pt-14 pb-14 m-auto w-100 ' id='skills'>
      <Section whitetxt='My' orangetext='Skills'/>
      <div className='mt-14'>
      <ProgressBar skilltxt="HTML-5" par="80" value={80}/>
      <ProgressBar skilltxt="CSS-3" par="75" value={75}/>
      <ProgressBar skilltxt="Bootstrap" par="60" value={60}/>
      <ProgressBar skilltxt="JavaScript" par="50" value={50}/>
      <ProgressBar skilltxt="Adobe Photoshop" par="75" value={75}/>
      <ProgressBar skilltxt="Adobe Illustrator" par="60" value={60}/>
      </div>
    </div>
  )
}
