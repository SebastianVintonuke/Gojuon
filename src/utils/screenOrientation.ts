import { useState, useEffect } from 'react';

export const useScreenOrientation = () => {
    const [isVerticalScreen, setIsVerticalScreen] = useState(
        window.innerHeight > window.innerWidth
    );

    useEffect(() => {
        const handleOrientationChange = () => {
            setIsVerticalScreen(window.innerHeight > window.innerWidth);
        };

        // Agregar el evento de cambio de orientación al montar el componente
        window.addEventListener('resize', handleOrientationChange);

        // Eliminar el evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleOrientationChange);
        };
    }, []);

    return isVerticalScreen;
};

/*
useEffect(() => {
        const handleOrientationChange = () => {
            const isPortrait = window.matchMedia('(orientation: portrait)').matches;

            if (isPortrait) {
                document.body.style.transform = 'rotate(90deg)';
            } else {
                document.body.style.transform = 'rotate(0deg)';
            }
        };
        window.addEventListener('orientationchange', handleOrientationChange);
        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
        };
    }, []);
*/