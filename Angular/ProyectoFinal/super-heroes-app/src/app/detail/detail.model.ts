export interface ApiSuperHero {
    response: string;
    id: number;
    name: string;
    powerstats: ApiSuperHeroPowerstats;
    biography: ApiSuperHeroBiography;
    appearance: ApiSuperHeroAppearance;
    work: ApiSuperHeroWork;
    connections: ApiSuperHeroConnections;
    image: ApiSuperHeroImage;
}

export interface ApiSuperHeroPowerstats {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
}

export interface ApiSuperHeroBiography {
    aliases: string[];
    alignment: string;
    "alter-egos": string;
    "first-appearance": string;
    "full-name": string;
    "place-of-birth": string;
    publisher: string;
}

export interface ApiSuperHeroAppearance {
    "eye-color": string;
    gender: string;
    "hair-color": string;
    height: string[];
    race: string;
    weight: string[];
}

export interface ApiSuperHeroWork {
    base: string;
    occupation: string;
}

export interface ApiSuperHeroConnections {
    "group-affiliation": string;
    relatives: string;
}

export interface ApiSuperHeroImage {
    url: string;
}

export interface SuperHero {
    id: number;
    name: string;
    image: string;
}