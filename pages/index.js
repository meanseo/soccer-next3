import { Footer, Layout, Pagination, Nav, Table, Modal, Home} from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import tableStyles from '@/styles/Table.module.css'
import { useEffect } from 'react'

export default function HomePage(){
  return( 
      
      <Layout>
      <Home/>
      </Layout>
  )
  
}