export class Character {
    name!: string;
    height!: string;
    mass!: string
    hair_color!: string
    skin_color!: string
    eye_color!: string
    birth_year!: string
    gender!: string
    homeworld!: string
    films!: string[]
    species!: string[] 
    vehicles!: string[]
    starships!: string[]
    created!: string[]
    edited!: string
    url!: string
}

export class Movie {
    title!: string;
    episode_id!: number;
    opening_crawl!: string; 
    director!: string;
    producer!: string; 
    release_date!: string; 
    characters!: string[][];
    planets!: string[][];
    starships!: string[][];
    vehicles!: string[][]; 
    species!: [][]; 
    created!: string;
    edited!: string;
    url!: string;
}

export class Planets {
    name!: string;
    rotation_period!: string;
    orbital_period!: string
    diameter!: string
    climate!: string
    gravity!: string
    terrain!: string
    surface_water!: string
    population!: string
    residents!: string[]
    films!: string[] 
    created!: string[]
    edited!: string
    url!: string
}

export class Spaceships {
    name!: string;
    model!: string;
    manufacturer!: string
    cost_in_credits!: string
    length!: string
    max_atmosphering_speed!: string
    crew!: string
    passengers!: string
    cargo_capacity!: string
    consumables!: string
    hyperdrive_rating!: string 
    MGLT!: string
    starship_class!: string
    pilots!: string[]
    films!: string[]
    created!: string[]
    edited!: string
    url!: string
}

export class Species {
    name!: string;
    classification!: string;
    designation!: string
    average_height!: string
    skin_colors!: string
    eye_colors!: string
    average_lifespan!: string
    homeworld!: string
    language!: string
    people!: string[]
    films!: string[]
    created!: string[]
    edited!: string
    url!: string
}

export class Vehicles {
    name!: string;
    model!: string;
    manufacturer!: string
    cost_in_credits!: string
    length!: string
    max_atmosphering_speed!: string
    crew!: string
    passengers!: string
    cargo_capacity!: string
    consumables!: string
    vehicle_class!: string[]
    pilots!: string[]
    films!: string[]
    created!: string[]
    edited!: string
    url!: string
}