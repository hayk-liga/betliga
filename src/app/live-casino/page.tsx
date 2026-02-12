import { Suspense } from "react"

import { LiveCasinoContent } from "@/components/casino/LiveCasinoContent"

const LiveCasinoPage = () => {
  return (
    <Suspense>
      <LiveCasinoContent />
    </Suspense>
  )
}

export default LiveCasinoPage
