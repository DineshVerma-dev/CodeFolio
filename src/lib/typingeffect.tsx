import { useState, useEffect, useRef } from "react";

interface TypingEffectProps {
    text: string;
    speed?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const indexRef = useRef(0); 

    useEffect(() => {
        setDisplayedText(""); 
        indexRef.current = 0; 

        const interval = setInterval(() => {
            if (indexRef.current < text.length) {
                setDisplayedText(text.slice(0, indexRef.current + 1));
                indexRef.current++;
            } else {
                clearInterval(interval);
                setShowCursor(false); 
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, [showCursor]);

    return (
        <span>
            {displayedText}
            {showCursor && "|"}
        </span>
    );
};
