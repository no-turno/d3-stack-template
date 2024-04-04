import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: IndexPage,
	loader: async (opts) => {
        return await opts.context.apiClient.index.get()
    },
	notFoundComponent: () => <>Not Found</>,
});

function IndexPage() {
	const { data } = Route.useLoaderData();
	return <>{data}</>;
}
