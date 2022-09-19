import { useState } from "react";

export const useLocalStorage = (keyname, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyname);
            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyname, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error) {
            return defaultValue;
        }
    })
}