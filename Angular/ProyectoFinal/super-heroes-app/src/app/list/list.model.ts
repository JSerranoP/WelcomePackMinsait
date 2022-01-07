export interface ApiSuperHero {
    id: number;
    name: string;
    powerstats: object;
    biography: object;
    appearence: object;
    work: object;
    connections: object;
    image: ApiSuperHeroImage;
}

export interface ApiSuperHeroImage {
    url: string;
}

export interface SuperHero {
    id: number;
    name: string;
    image: string;
}

export interface SuperHeroResponse {
    "response": string;
    "results-for": string;
    results: ApiSuperHero[];
}