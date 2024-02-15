export interface IInfo {
    count: number;
    pages: number;
    next: string;
    prev: null;
}

export interface IOrigin {
    name: string;
    url: string;
}

export interface ILocation {
    name: string;
    url: string;
}

export interface IResult {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOrigin;
    location: ILocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface ICharacter {
    info: IInfo;
    results: IResult[];
}
export interface ICharacterCard {
    id: number;
    name: string;
    status: string;
    species: string;
    location: ILocation;
    image: string;
}

export interface IEpisodeType {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}
