import React from "react";

interface HighlightTextProps {
    text: string;
}

 export const HighlightText: React.FC<HighlightTextProps> = ({ text }) => {
    const highlightedText = text.split(/(\[.*?\])/).map((part, index) =>
        part.startsWith("[") && part.endsWith("]") ? (
            <span key={index} className="font-bold">
                {part.slice(1, -1)}
            </span>
        ) : (
            part
        )
    );

    return <p>{highlightedText}</p>;
};

