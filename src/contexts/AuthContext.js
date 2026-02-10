"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ApiGetUserFromSessionClient } from "@/lib/api/userClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const loginUser = (userData) => setUser(userData);
	const logoutUser = () => setUser(null);

	const refreshUser = async () => {
		try {
			const result = await ApiGetUserFromSessionClient();

			const user = result.data?.user;
			if (user) {
				setUser(user);
			}
		} catch (err) {
			console.error("Failed to refresh user", err);
		}
	};

	useEffect(() => {
		refreshUser().finally(() => setLoading(false));
	}, []);

	return <AuthContext.Provider value={{ user, loginUser, logoutUser, refreshUser, loading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
