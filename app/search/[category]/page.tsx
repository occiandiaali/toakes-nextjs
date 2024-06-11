import Link from 'next/link'

export default function Page({params}: {params: {category: string}}) {
    return (
        <div>
        <Link href="/search">back</Link>
        <h1>Showing: {params.category}</h1>
        </div>
    )
}