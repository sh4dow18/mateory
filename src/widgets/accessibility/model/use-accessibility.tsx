// Set this hook as a client hook
"use client";
// Use Accessibility Requirements
import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FaEye } from "react-icons/fa";
import { IoMdContrast } from "react-icons/io";
import { MdDarkMode, MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { GetAccessibilityPreferences, SetAccessibilityPreferences } from "../lib/local-storage";
// Use Accessibility Types
export type ThemeStates = {
  darkMode: boolean;
  highContrast: boolean;
  grayscale: boolean;
};
export type FontStates = {
  small: boolean;
  large: boolean;
  extraLarge: boolean;
};
export type ModeStates = {
  dyslexia: boolean;
};
export type Section = {
  id: number;
  label: string;
  Icon: IconType;
  enabled: boolean;
  toggle: () => void;
};
// Use Accessibility Constants
const DEFAULT_THEME_OBJECT = {
  darkMode: false,
  highContrast: false,
  grayscale: false,
};
const DEFAULT_FONT_OBJECT = {
  small: false,
  large: false,
  extraLarge: false,
};
const DEFAULT_MODE_OBJECT = {
  dyslexia: false,
};
// Theme Effects Record to map keys to each toogle function
const THEME_EFFECTS: Record<keyof ThemeStates, (enabled: boolean) => void> = {
  darkMode: (enabled) => document.body.classList.toggle("dark", enabled),
  highContrast: (enabled) => document.body.classList.toggle("high-contrast", enabled),
  grayscale: (enabled) => document.body.classList.toggle("grayscale", enabled),
};
// Font Effects Record to map keys to each toogle function
const FONT_EFFECTS: Record<keyof FontStates, (enabled: boolean) => void> = {
  small: (enabled) => document.body.classList.toggle("font-small", enabled),
  large: (enabled) => document.body.classList.toggle("font-large", enabled),
  extraLarge: (enabled) => document.body.classList.toggle("font-xlarge", enabled),
};
// Mode Effects Record to map keys to each toogle function
const MODE_EFFECTS: Record<keyof ModeStates, (enabled: boolean) => void> = {
  dyslexia: (enabled) => {
    document.body.classList.toggle("font-inter", !enabled);
    document.body.classList.toggle("font-dyslexia", enabled);
  },
};
// Use Accessibility Main Function
function useAccessibility() {
  // Use Accessibility Hooks
  const [theme, setTheme] = useState<ThemeStates>(DEFAULT_THEME_OBJECT);
  const [font, setFont] = useState<FontStates>(DEFAULT_FONT_OBJECT);
  const [mode, setMode] = useState<ModeStates>(DEFAULT_MODE_OBJECT);
  const PREFERENCES_LOADED = useRef(false);
  // useEffect that will Set User Preferences in Hooks when page is loading
  useEffect(() => {
    // Get User Preferences from Local Storage
    const USER_PREFERENCES = GetAccessibilityPreferences();
    // Check if exist the user preferences
    if (USER_PREFERENCES !== null) {
      // If exists, add classes to body and hooks with user preferences
      Object.entries(USER_PREFERENCES.theme).forEach(([key, enabled]) => {
        THEME_EFFECTS[key as keyof ThemeStates](enabled);
      });
      setTheme(USER_PREFERENCES.theme);
      Object.entries(USER_PREFERENCES.font).forEach(([key, enabled]) => {
        FONT_EFFECTS[key as keyof FontStates](enabled);
      });
      setFont(USER_PREFERENCES.font);
      Object.entries(USER_PREFERENCES.mode).forEach(([key, enabled]) => {
        MODE_EFFECTS[key as keyof ModeStates](enabled);
      });
      setMode(USER_PREFERENCES.mode);
    }
    // Set preferences loaded as true
    PREFERENCES_LOADED.current = true;
  }, []);
  // useEffect that will Set User Preferences in local storage when change in accessibility menu
  useEffect(() => {
    // If user preferences are loaded, set new accessibility preferences
    if (PREFERENCES_LOADED.current) {
      SetAccessibilityPreferences({
        theme: theme,
        font: font,
        mode: mode,
      });
    }
  }, [theme, font, mode]);
  // Genereic Toggle Function that gets an object which values are boolean
  const toggle = <T extends Record<string, boolean>>(
    // Toggle key to activate / deactivate
    key: keyof T,
    // Current object state
    prevState: T,
    // Function that updates the state
    setState: (newState: T) => void,
    // Function map that applies an effect for each key
    effects: { [K in keyof T]: (enabled: boolean) => void },
  ) => {
    // Init New State as Empty
    const NEW_STATE: Record<string, boolean> = {};
    // First, get all the keys of the state as Key of T
    // Second, for each key, If it is the key that has to toggle, invert the value; if not, set it to false
    // Finally, execute the effect function
    (Object.keys(prevState) as (keyof T)[]).forEach((k) => {
      NEW_STATE[k as string] = k === key ? !prevState[k] : false;
      effects[k](NEW_STATE[k as string]);
    });
    // Update state
    setState(NEW_STATE as T);
  };
  // Toggle Functions for each type of states
  const toggleTheme = (key: keyof ThemeStates) => toggle(key, theme, setTheme, THEME_EFFECTS);
  const toggleFont = (key: keyof FontStates) => toggle(key, font, setFont, FONT_EFFECTS);
  const toggleMode = (key: keyof ModeStates) => toggle(key, mode, setMode, MODE_EFFECTS);
  // Sections List that will return
  const SECTIONS_LIST: Section[] = [
    {
      id: 1,
      label: "Modo Oscuro",
      Icon: MdDarkMode,
      enabled: theme.darkMode,
      toggle: () => toggleTheme("darkMode"),
    },
    {
      id: 2,
      label: "Alto Contraste",
      Icon: IoMdContrast,
      enabled: theme.highContrast,
      toggle: () => toggleTheme("highContrast"),
    },
    {
      id: 3,
      label: "Escala de Grises",
      Icon: IoMdContrast,
      enabled: theme.grayscale,
      toggle: () => toggleTheme("grayscale"),
    },
    {
      id: 4,
      label: "Letra Pequeña",
      Icon: MdTextDecrease,
      enabled: font.small,
      toggle: () => toggleFont("small"),
    },
    {
      id: 5,
      label: "Letra Grande",
      enabled: font.large,
      Icon: MdTextIncrease,
      toggle: () => toggleFont("large"),
    },
    {
      id: 6,
      label: "Letra Muy Grande",
      Icon: MdTextIncrease,
      enabled: font.extraLarge,
      toggle: () => toggleFont("extraLarge"),
    },
    {
      id: 7,
      label: "Modo Dislexia",
      Icon: FaEye,
      enabled: mode.dyslexia,
      toggle: () => toggleMode("dyslexia"),
    },
  ];
  // Return Section List
  return SECTIONS_LIST;
}

export default useAccessibility;
