import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: AboutPage,
	loader: async (opts) =>{return await opts.context.apiClient.about.get()},
	notFoundComponent: () => <>Not Found</>,
});

function AboutPage() {
	const { data } = Route.useLoaderData();
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
