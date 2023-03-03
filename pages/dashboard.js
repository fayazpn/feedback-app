import React from 'react'
import DashboardContainer from '@/components/DashboardContainer'
import EmptyDash from '@/components/EmptyDash'
import FreePlanEmptyDash from '@/components/FreePlanEmptyDash'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import { useAuth } from '@/lib/auth'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import SiteTable from '@/components/SiteTable'

const Dashboard = () => {
  const auth = useAuth()

  const { data, error, isLoading } = useSWR('/api/sites', fetcher)

  console.log(data)
  if (!data) {
    return (
      <DashboardContainer>
        <SiteTableSkeleton />
      </DashboardContainer>
    )
  }
  return (
    <DashboardContainer>
      {
        data?.sites?.length > 0 ? (<SiteTable sites={data.sites} />) : (<EmptyDash />)
      }
      </DashboardContainer>
    
  )
}

export default Dashboard
