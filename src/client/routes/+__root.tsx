import { globalCss } from "../styles/global.css";
import type { Api } from "../api/client";
import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{
	apiClient: Api;
}>()({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<style data-id="global-css">{globalCss}</style>
			<div className="container">
				<div className="navigation">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/config">Config</Link>
				</div>
				<br />
				<Outlet />
			</div>
		</>
	);
}
