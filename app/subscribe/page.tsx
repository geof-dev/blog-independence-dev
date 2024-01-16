import Subscribe from "@/components/Subscribe"
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'Projects' })

export default function SubscribePage() {
  return (
    <>
      <Subscribe />
    </>
  )
}
