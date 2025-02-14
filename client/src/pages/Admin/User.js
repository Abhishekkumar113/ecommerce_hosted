import React from 'react'
import Layout from '../../components/Layout'
import { AdminMenu } from '../../components/Layout/AdminMenu'

export const User = () => {
  return (
   <Layout title={"Dashboard-All Users"}>
        <div className='container-fluid m-3 p-3'>
    <div className='row'>
       <div className='col-md-3'>
          <AdminMenu />
       </div>
       <div className='col-md-9'>
           <h1>All Users</h1>
       </div>      
    </div>
    </div>
   </Layout>

  )
}
