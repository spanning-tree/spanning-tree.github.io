import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-green-800 bg-black/90 backdrop-blur">
            <div className="container flex h-16 max-w-3xl items-center px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2 text-green-500 hover:text-green-400">
                    <Terminal className="h-6 w-6" />
                    <span className="font-bold font-mono tracking-tighter">
                        ~
                    </span>
                </Link>
            </div>
        </nav>
    );
}
