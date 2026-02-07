"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const ThemeContext = createContext();
const THEME_KEY = "sheepy-theme";
const ALL_THEMES = ["light", "dark", "night", "unreal"];

export const ThemeProvider = ({ children }) => {
	const { user } = useAuth();
	const [theme, setTheme] = useState("night");
	const [hydrated, setHydrated] = useState(false);

	// 1) Load from localStorage (first paint)
	useEffect(() => {
		const saved = localStorage.getItem(THEME_KEY);
		if (saved && ALL_THEMES.includes(saved)) {
			setTheme(saved);
		} else {
			setTheme("night");
		}
		setHydrated(true);
	}, []);

	// 2) Override with DB theme when user loads
	useEffect(() => {
		if (user?.settings?.appearance && ALL_THEMES.includes(user.settings.appearance)) {
			setTheme(user.settings.appearance);
		}
	}, [user]);

	// 3) Apply theme to <html> and persist
	useEffect(() => {
		if (!theme) return;

		document.documentElement.classList.remove(...ALL_THEMES);
		document.documentElement.classList.add(theme);
		document.documentElement.setAttribute("data-theme", theme);

		localStorage.setItem(THEME_KEY, theme);
	}, [theme]);

	const changeTheme = (newTheme) => {
		if (!ALL_THEMES.includes(newTheme)) return;
		setTheme(newTheme);
	};

	if (!hydrated) return null;

	return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
