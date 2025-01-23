import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const texts = ['Frontend Developer', 'Problem Solver', 'Tech Enthusiast'];
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [borderLine, setBorderLine] = useState(true);

    useEffect(() => {
        const currentText = texts[textIndex];

        const typingSpeed = isDeleting ? 100 : 200; // Speed for typing/deleting
        const timeout = setTimeout(() => {
            if (isDeleting) {
                // Deleting characters
                setText(currentText.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else {
                // Adding characters
                setText(currentText.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }

            // When the text is fully typed
            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
            }

            // When the text is fully deleted
            if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length); // Move to the next text
            }
        }, typingSpeed);

        return () => clearTimeout(timeout); // Clear timeout on cleanup
    }, [charIndex, isDeleting, textIndex, texts]);

    // Handle the blinking effect for the border/cursor
    useEffect(() => {
        const interval = setInterval(() => {
            setBorderLine((prev) => !prev);
        }, 400); 

        return () => clearInterval(interval); // Clear interval on cleanup
    }, []);

    return (
        <div className="typewriter text-orange-500">
            <span>{text}</span>
            <span className={`border-l-2 ${borderLine ? 'border-black' : 'border-transparent'}`}></span>
        </div>
    );
};

export default Typewriter;
