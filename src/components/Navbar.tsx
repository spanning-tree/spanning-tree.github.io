import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-green-800 bg-black/90 backdrop-blur">
            <div className="container flex h-16 max-w-3xl items-center px-4 md:px-8">
                <Link href="/" className="flex items-center text-green-500 hover:text-green-400">
                    <span className="font-bold font-mono tracking-tighter">
                        ~ $
                    </span>
                </Link>
            </div>
        </nav>
    );
}
