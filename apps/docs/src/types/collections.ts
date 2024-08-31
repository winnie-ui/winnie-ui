export type ContentResponse = {
	id: number;
	title: string;
	description: string;
	body: string;
	slug: string;
	href: string;
};

export type CollectionResponse = {
	collection: ContentResponse[];
};
