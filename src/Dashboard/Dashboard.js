import React from 'react'
import ManageBlog from './ManageBlog'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div className="flex flex-no-wrap">
            <Sidebar />
            <ManageBlog />
        </div>
    )
}

export default Dashboard
