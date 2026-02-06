import useSWR from "swr";
import { ApiGetProjectCrush } from "@/lib/api/projectsExtended";
import { normalizeCategoryLink } from "@/utils/projectHandlers";

const fetcher = async () => {
	const projects = await ApiGetProjectCrush();
	if (!Array.isArray(projects)) {
		throw new Error("Invalid projects response");
	}
	return projects.map((project) => ({
		...project,
		category: {
			...project.category,
			link: normalizeCategoryLink(project.category),
		},
	}));
};

export function useCrushProjects() {
	const { data, error, isLoading } = useSWR("crushProjects", fetcher, {
		revalidateOnFocus: false,
		dedupingInterval: 60000,
	});

	return {
		projects: data ?? [],
		isLoading,
		error: error?.message ?? null,
	};
}
