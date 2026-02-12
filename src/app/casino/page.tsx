import { Suspense } from "react"

import { CasinoContent } from "@/components/casino/CasinoContent"

const CasinoPage = () => {
  return (
    <Suspense>
      <CasinoContent />
    </Suspense>
  )
}

export default CasinoPage
