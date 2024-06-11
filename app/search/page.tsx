import { Badge, badgeVariants } from "@/components/ui/badge"
import Link  from "next/link";

const categories = [
    {
        id: 1,
        label: 'electronics',
        path: 'electronics'
    },
        {
        id: 2,
        label: 'automobiles',
        path: 'automobiles'
    },
        {
        id: 3,
        label: 'men',
        path: 'men'
    },
        {
        id: 4,
        label: 'phones',
        path: 'phones'
    },
        {
        id: 5,
        label: 'household',
        path: 'household'
    },
        {
        id: 6,
        label: 'women',
        path: 'women'
    },
            {
        id: 7,
        label: 'real_estate',
        path: 'real_estate'
    },
            {
        id: 8,
        label: 'kids',
        path: 'kids'
    },
            {
        id: 9,
        label: 'other',
        path: 'other'
    },
    
];

export default function Search() {
    return (
        <div>
        <h1 className="text-2xl font-semibold">Categories</h1>
           <ul>
        {categories.map((category, i) => (
            <li key={category.id}>
            <Link href={`/search/${category.path}`} className={`${badgeVariants({ variant: "outline" })} w-36 h-11 text-center mt-5 mx-1 pl-8`} key={category.id}>{category.label}</Link>
            </li>
            // <Badge className="w-36 h-11 text-center mt-5 mx-1 pl-8" key={category.id}>
            // <Link href={`/search/${category.path}`}>{category.label}</Link>
            // </Badge>

        ))}
           </ul>
        </div>
    )
}