export interface SuperHeroeInterface {
    id: number;
    name: string;
    image: string;
}

export interface SuperHeroeResponseInterface {
    "response": string;
    "results-for": string;
    results: SuperHeroeInterface[];
}