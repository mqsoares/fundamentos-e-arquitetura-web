import api from "../api";

export const getCharacters = async (page: number) => {
    const { data } = await api.get(`character/?page=${page}`);
    return data;
};

export const getCharacter = async (id: string) => {
    const { data } = await api.get(`character/${id}`);
    return data;
};

export const getCharacterPath = async (pathURL: string) => {
    const { data } = await api.get(`${pathURL}`);
    return data;
};
