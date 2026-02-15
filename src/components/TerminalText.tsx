"use client";

import { useEffect, useState } from "react";

interface TerminalTextProps {
    text: string;
    className?: string;
    typingSpeed?: number;
    startDelay?: number;
}

export default function TerminalText({
    text,
    className = "",
    typingSpeed = 50,
    startDelay = 0,
}: TerminalTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, startDelay);
        return () => clearTimeout(timeout);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex >= text.length) {
                clearInterval(interval);
                setFinished(true);
                return;
            }
            currentIndex++;
            setDisplayedText(text.slice(0, currentIndex));
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [started, text, typingSpeed]);

    return (
        <span className={`${className} font-mono`}>
            {displayedText}
            {!finished && <span className="animate-pulse text-green-500 inline-block w-0 overflow-visible">_</span>}
        </span>
    );
}
