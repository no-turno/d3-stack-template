/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CLIENT_PORT: string;
	readonly VITE_CLIENT_HOSTNAME: string;
	readonly VITE_CLIENT_FRAMEWORK: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
