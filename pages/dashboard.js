import EmptyDash from '@/components/EmptyDash'
import FreePlanEmptyDash from '@/components/FreePlanEmptyDash'
import { useAuth } from '@/lib/auth'
import React from 'react'

const Dashboard = () => {
  const auth = useAuth()
  if(auth.user) {
    return 'Loading..'
  }
  return (
    <EmptyDash />
  )
}

export default Dashboard