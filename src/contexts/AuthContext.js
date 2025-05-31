"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getUserFromSession } from "@/lib/api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const loginUser = (userData) => setUser(userData);
	const logoutUser = () => setUser(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await getUserFromSession();
				if (userData) {
					setUser(userData);
				}
			} catch (err) {
				console.error("Error loading user from session", err);
			} finally {
				setLoading(false);
			}
		};

		if (!user) {
			fetchUser();
		}
	}, []);

	return <AuthContext.Provider value={{ user, loginUser, logoutUser, loading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
