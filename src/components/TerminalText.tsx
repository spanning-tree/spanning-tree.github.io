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
            <span className="animate-pulse border-r-2 border-green-500 ml-1">
                &nbsp;
            </span>
        </span>
    );
}
