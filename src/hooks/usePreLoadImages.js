import { useState, useEffect } from 'react';

export function usePreloadImages(images) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const promises = images.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(promises)
            .then(() => setLoaded(true))
            .catch(error => console.error("Error loading images:", error));
    }, [images]);

    return loaded;
}