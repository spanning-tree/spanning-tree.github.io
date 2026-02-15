import TerminalText from "@/components/TerminalText";
import PublicationEntry from "@/components/PublicationEntry";

export default function Home() {
    return (
        <div className="container max-w-3xl px-4 py-8 md:px-8 md:py-12 font-mono text-green-500">
            <div className="space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-green-700 mb-2">
                        <span className="text-green-500">zekai@system:~$</span>
                        <span>whoami</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-green-400">
                        {/* Fixed width to prevent layout shifts if needed, but simple text is best */}
                        <TerminalText text="Zekai Li" typingSpeed={150} />
                    </h1>
                    <p className="text-xl text-green-600">
                        MSc Student at Brown University
                    </p>
                    <div className="prose max-w-none text-green-600/90 leading-relaxed border-l-2 border-green-900 pl-4 py-2">
                        <p className="mb-4">
                            <span className="text-green-800">{">"}</span> I am a Master's student in Computer Science at Brown University. My research interests lie in <span className="text-green-300">Formal Methods</span>, <span className="text-green-300">Programming Languages</span>, <span className="text-green-300">Artificial Intelligence</span>, and <span className="text-green-300">Systems</span>. I am a member of <a href="https://atlas.cs.brown.edu/" target="_blank" rel="noreferrer" className="text-green-300 hover:text-green-200 hover:underline decoration-dashed">Brown Atlas Group</a>.
                        </p>
                        <p className="mb-4">
                            <span className="text-green-800">{">"}</span> Previously, I completed my B.Sc. in Computer Science at University of Nottingham.
                        </p>
                        <p>
                            <span className="text-green-800">{">"}</span> I focus on the correctness of real world systems.
                        </p>
                    </div>

                    <div className="pt-4 space-y-2">
                        <div className="flex items-center gap-2 text-green-700">
                            <span className="text-green-500">zekai@system:~$</span>
                            <span>cat email.sh</span>
                        </div>
                        <div className="text-green-400 font-bold">
                            echo li | sed s/^/zekai_/ | sed s/$/@brown.edu/
                        </div>
                    </div>
                </section>

                <section className="space-y-4 pt-8 border-t border-green-900/50">
                    <div className="flex items-center gap-2 text-green-700 mb-4">
                        <span className="text-green-500">zekai@system:~$</span>
                        <span>cat recent_news.log</span>
                    </div>
                    <div className="space-y-6 pl-2">
                        <div className="relative border-l border-green-900 pl-6 pb-2">
                            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 border border-green-500 bg-black rounded-sm" />
                            <time className="mb-1 block text-sm text-green-800 font-bold">[2025]</time>
                            <p className="text-base text-green-600">
                                Giving a talk on "Rt: a new type system for the streaming shell" at{" "}
                                <a href="https://svd.csail.mit.edu/2025/" target="_blank" rel="noreferrer" className="font-bold text-green-400 hover:text-green-300 hover:underline decoration-dashed">NESVD</a>.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6 pl-2">
                        <div className="relative border-l border-green-900 pl-6 pb-2">
                            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 border border-green-500 bg-black rounded-sm" />
                            <time className="mb-1 block text-sm text-green-800 font-bold">[2025]</time>
                            <p className="text-base text-green-600">
                                Giving a talk on "Regular language types for the streaming shell" at{" "}
                                <a href="https://nepls.org/Events/35/" target="_blank" rel="noreferrer" className="font-bold text-green-400 hover:text-green-300 hover:underline decoration-dashed">NEPLS</a>.
                            </p>
                        </div>
                        <div className="relative border-l border-green-900 pl-6 pb-2">
                            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 bg-green-500 rounded-sm" />
                            <time className="mb-1 block text-sm text-green-800 font-bold">[2025]</time>
                            <p className="text-base text-green-500">
                                Paper{" "}
                                <a href="https://dl.acm.org/doi/abs/10.1145/3713082.3730395" target="_blank" rel="noreferrer" className="font-bold text-green-300 hover:text-green-200 hover:underline decoration-dashed">
                                    "From Ahead-of- to Just-in-Time and Back Again: Static Analysis for Unix Shell Programs"
                                </a>{" "}
                                accepted at <a href="https://sigops.org/s/conferences/hotos/2025/" target="_blank" rel="noreferrer" className="font-bold text-green-300 hover:text-green-200 hover:underline decoration-dashed">HotOS '25</a>.
                            </p>
                        </div>
                        <div className="relative border-l border-green-900 pl-6 pb-2">
                            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 border border-green-500 bg-black rounded-sm" />
                            <time className="mb-1 block text-sm text-green-800 font-bold">[2024]</time>
                            <p className="text-base text-green-600">
                                Started MSc at Brown University.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6 pt-8 border-t border-green-900/50">
                    <div className="flex items-center gap-2 text-green-700 mb-6">
                        <span className="text-green-500">zekai@system:~$</span>
                        <span>ls -l publications/</span>
                    </div>

                    <PublicationEntry
                        title="From Ahead-of- to Just-in-Time and Back Again: Static Analysis for Unix Shell Programs"
                        authors={
                            <>
                                Lukas Lazarek, Seong-Heon Jung, Evangelos Lamprou,{" "}
                                <span className="font-bold text-green-300 border-b border-green-500/50">Zekai Li</span>, Anirudh Narsipur, Eric Zhao,
                                Michael Greenberg, Konstantinos Kallas, Konstantinos Mamouras, Nikos
                                Vasilakis
                            </>
                        }
                        journal="The ACM SIGOPS 20th Workshop on Hot Topics in Operating Systems (HotOS '25)"
                        year="2025"
                        paperUrl="https://dl.acm.org/doi/abs/10.1145/3713082.3730395"
                    />
                    <PublicationEntry
                        title="A Logic of East and West for Intervals"
                        authors={
                            <>
                                <span className="font-bold text-green-300 border-b border-green-500/50">Zekai Li</span>, Amin Farjudian, Heshan Du
                            </>
                        }
                        journal="The 16th Conference on Spatial Information Theory (COSIT '24)"
                        year="2024"
                        paperUrl="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.COSIT.2024.17"
                    />
                </section>
            </div>
        </div>
    );
}
