import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('accessibility_fontSize') || 'normal');
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem('accessibility_highContrast') === 'true');
  const [dyslexicFont, setDyslexicFont] = useState(() => localStorage.getItem('accessibility_dyslexicFont') === 'true');

  useEffect(() => {
    localStorage.setItem('accessibility_fontSize', fontSize);
    localStorage.setItem('accessibility_highContrast', highContrast);
    localStorage.setItem('accessibility_dyslexicFont', dyslexicFont);

    const htmlElement = document.documentElement;
    
    // Scale Font Size
    htmlElement.classList.remove('font-size-normal', 'font-size-large', 'font-size-xlarge');
    htmlElement.classList.add(`font-size-${fontSize}`);

    // High Contrast Feature
    if (highContrast) {
      htmlElement.classList.add('high-contrast');
    } else {
      htmlElement.classList.remove('high-contrast');
    }

    // Dyslexia Friendly Font Feature
    if (dyslexicFont) {
      htmlElement.classList.add('font-dyslexic');
    } else {
      htmlElement.classList.remove('font-dyslexic');
    }
  }, [fontSize, highContrast, dyslexicFont]);

  return (
    <AccessibilityContext.Provider value={{
      fontSize, setFontSize,
      highContrast, setHighContrast,
      dyslexicFont, setDyslexicFont
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
