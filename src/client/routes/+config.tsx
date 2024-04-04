import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/config")({
	component: ConfigPage,
	loader: async (opts) =>{return await opts.context.apiClient.config.get()},
	notFoundComponent: () => <>Not Found</>,
});

function ConfigPage() {
	const { data } = Route.useLoaderData();
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
