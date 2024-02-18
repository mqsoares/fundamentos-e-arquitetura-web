export type TypeCharacterCard = {
    id: number;
    name: string;
    status: string;
    species: string;
    location: { name: string; url: string };
    image: string;
};

export interface IPropsCharacterCard {
    character: TypeCharacterCard;
}

export type TypeCharacterDetail = {
    name: string;
    status: string;
    species: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    episode: string[];
};

export interface IPropsCharacterDetail {
    character: TypeCharacterDetail;
}

export type TypeEpisode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
};

export interface IPropsEpisodeCard {
    episode: TypeEpisode;
}
