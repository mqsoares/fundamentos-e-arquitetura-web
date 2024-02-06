import api from "../api";

export interface ICharacter {
    info: IInfo;
    results: IResult[];
}

export interface IInfo {
    count: number;
    pages: number;
    next: string;
    prev: null;
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

export interface IOrigin {
    name: string;
    url: string;
}

export interface ILocation {
    name: string;
    url: string;
}

export const getCharacters = async () => {
    const { data } = await api.get("character");
    return data.results;
};

export const getCharacter = async (id: string) => {
    const { data } = await api.get(`character/${id}`);
    return data.results;
};
