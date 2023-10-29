export interface Plan {
	name: string,
	extends?: string,
	price: number,
	features: string[],
}

export default interface Plans {
	features: { [key: string]: string },
	plans: { [key: string]: Plan },
}