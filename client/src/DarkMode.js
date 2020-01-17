import React, { useState } from "react";

export const DarkMode = () => {
    const [enabled, setEnabled] = useState(false);
    const enable = (isEnabled) => {
        console.log('Dark Mode: ' + isEnabled);
        setEnabled(isEnabled);
    };
    return [enabled, setEnabled, enable];
  };