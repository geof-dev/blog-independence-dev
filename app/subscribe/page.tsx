import Subscribe from "@/components/Subscribe";

import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function SubscribePage() {
    return (
        <>
        <Subscribe />
        </>
    )
}
