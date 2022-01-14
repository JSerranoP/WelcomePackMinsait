export interface SuperHeroRegister {
    name: string;
    combat: number;
    durability: number;
    intelligence: number;
    power: number;
    speed: number;
    strength: number;
}

export interface MyCreateResponse {
    id: string;
    hero: SuperHeroRegister
}