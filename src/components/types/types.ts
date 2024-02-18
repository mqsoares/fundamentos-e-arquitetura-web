export interface ITypeCharacterCard {
    id: number;
    name: string;
    status: string;
    species: string;
    location: { name: string; url: string };
    image: string;
}

export interface IPropsCharacterCard {
    character: ITypeCharacterCard;
}

export interface ITypeCharacterDetail {
    name: string;
    status: string;
    species: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    episode: string[];
}

export interface IPropsCharacterDetail {
    character: ITypeCharacterDetail;
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
