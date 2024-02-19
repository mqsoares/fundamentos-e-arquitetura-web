export interface ITypeCharacterCard {
    id: number;
    name: string;
    status: string;
    species: string;
    location: ILocation;
    image: string;
}

export interface IPropsCharacterCard {
    character: ITypeCharacterCard;
}

export interface ITypeCharacterDetail {
    name: string;
    status: string;
    species: string;
    origin: IOrigin;
    location: ILocation;
    image: string;
    episode: string[];
}
export interface ILocation {
    name: string;
    url: string;
}
export interface IOrigin {
    name: string;
    url: string;
}

export interface IPropsCharacterDetail {
    character: ITypeCharacterDetail;
    episodes: ITypeEpisode[];
}

export interface ITypeEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export interface IPropsEpisodeCard {
    episode: ITypeEpisode;
}

export interface IPropsEpisodeDetail {
    episode: ITypeEpisode;
    characters: ITypeCharacterCard[];
}

export interface ITypeLocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
}

export interface IPropsLocationCard {
    location: ITypeLocation;
}

export interface IPropsLocationDetail {
    location: ITypeLocation;
    residents: ITypeCharacterCard[];
}
