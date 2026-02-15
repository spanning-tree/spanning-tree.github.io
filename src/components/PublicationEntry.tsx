export interface PublicationProps {
    title: string;
    authors: React.ReactNode;
    journal: string;
    year?: string;
    paperUrl?: string;
}

export default function PublicationEntry({
    title,
    authors,
    journal,
    year,
    paperUrl,
}: PublicationProps) {
    return (
        <div className="mb-8 border-l-2 border-green-900 pl-4 transition-all hover:border-green-500 hover:pl-6 group">
            <h3 className="text-lg font-bold leading-tight text-green-400 font-mono">
                <span className="text-green-700 mr-2 group-hover:text-green-500 transition-colors">[{year || "????"}]</span>
                {paperUrl ? (
                    <a
                        href={paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-dashed decoration-1 underline-offset-4"
                    >
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h3>
            <div className="mt-2 text-green-600 font-mono text-sm">
                <span className="text-green-800">Authors:</span> {authors}
            </div>
            <div className="mt-1 text-sm italic text-green-700 font-mono">
                published in: {journal}
            </div>
        </div>
    );
}
