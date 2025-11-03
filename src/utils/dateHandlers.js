import { DateTime } from "luxon";

export function formatIsoTimestamp(isoTimestamp) {
	if (!isoTimestamp) {
		return { formatted: "", isValid: false };
	}

	const dt = DateTime.fromISO(isoTimestamp).toLocal();

	// If invalid date (wrong format, null DB field, etc.)
	if (!dt.isValid) {
		return { formatted: "", isValid: false };
	}

	const now = DateTime.local();
	const diffInHours = now.diff(dt, "hours").hours;

	const isToday = dt.hasSame(now, "day");
	const isYesterday = dt.hasSame(now.minus({ days: 1 }), "day");

	let formatted;
	if (diffInHours < 1) {
		formatted = dt.toRelative({ base: now }); // "23 minutes ago"
	} else if (isToday) {
		formatted = `Today • ${dt.toFormat("HH:mm")}`;
	} else if (isYesterday) {
		formatted = `Yesterday • ${dt.toFormat("HH:mm")}`;
	} else {
		formatted = `${dt.toFormat("dd LLL yyyy • HH:mm")} (${dt.zoneName})`;
	}

	return { formatted, isValid: true };
}
