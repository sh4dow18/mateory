// Set this hook as a client hook
"use client";
// Use Theme Logo Hook Requirements
import { useEffect, useState } from "react";
// Use Theme Logo Hook Main Function
function useThemeLogo() {
  // Use Theme Logo Logo Constants
  const DARK_LOGO_PATH = "/logos/dark.svg";
  const LIGHT_LOGO_PATH = "/logos/light.svg";
  // Use Theme Logo Logo Hooks
  const [themeLogo, setThemeLogo] = useState<string>(DARK_LOGO_PATH);
  // Use Effect that allows to change svg in Image component
  useEffect(() => {
    // Use Dark Logo if Mateory is in Light Mode
    setThemeLogo(document.body.classList.contains("dark") ? LIGHT_LOGO_PATH : DARK_LOGO_PATH);
    // Observer that Change the Dark Logo Value when theme change
    const OBSERVER = new MutationObserver(() => {
      setThemeLogo(document.body.classList.contains("dark") ? LIGHT_LOGO_PATH : DARK_LOGO_PATH);
    });
    // Observer can observe the atrribute class
    OBSERVER.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    // Disconnect the Observer
    return () => OBSERVER.disconnect();
  }, []);
  // Return Dark Logo Path
  return themeLogo;
}

export default useThemeLogo;
