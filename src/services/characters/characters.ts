import api from "../api";

export const getCharacters = async () => {
    const { data } = await api.get("character");
    return data.results;
};

export const getCharacter = async (id: string) => {
    const { data } = await api.get(`character/${id}`);
    return data.results;
};
