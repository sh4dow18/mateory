// Use this hook as a client hook
"use client";
// Use Alert Hook Requirements
import { useState } from "react";
import { AlertSettings, DEFAULT_ALERT_SETTINGS } from "../config/alert";
// Use Alert Hook Main Function
function useAlert() {
  // Use Alert Hook Main Hooks
  const [settings, setSettings] = useState<AlertSettings>(DEFAULT_ALERT_SETTINGS);
  // Alert on Click Function
  const onClick = () =>
    setSettings({
      ...DEFAULT_ALERT_SETTINGS,
      isOpen: false,
    });
  // Function that allows to update alert settings
  const UpdateSettings = (newSettings: AlertSettings) => setSettings(newSettings);
  // Return Hook Values
  return { ...settings, onClick, UpdateSettings };
}

export default useAlert;
