declare global {
	type HeadersInit = Record<string, string | string[]> | Iterable<[string, string]>;
}

export {};

