export interface SuperHeroeInterface {
    id: number;
    name: string;
    image: string;
}

export interface SuperHeroeResponseInterface {
    info: {
        count: number;
        next: string;
        pages: number;
        prev: string;
    };
    results: SuperHeroeInterface[];
}