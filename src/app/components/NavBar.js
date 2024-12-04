import Link from "next/link";

export default function NavBar() {
    return(
        <div>
            <Link href="/">Home</Link>
            <Link href="/route">About</Link>
            <Link href="/route">Contact</Link>
        </div>
    )
}