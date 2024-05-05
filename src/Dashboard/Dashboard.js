import React from 'react'
import './dashboard.css'

const Dashboard = ({ isSidebarOpen }) => {
  return (
    <div className="flex-1 px-14 py-8 bg-app-bg">
      <div className='h-full px-2 py-10'>
        <div className='border-red-100 border-2 h-full rounded-lg p-10'>
          <h1>Dashboard</h1>
          <p>Main content area.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard