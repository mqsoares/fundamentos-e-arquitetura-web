import api from "../api";

export const getEpisodes = async (page: number) => {
    const { data } = await api.get(`episode/?page=${page}`);
    return data.results;
};

export const getEpisode = async (id: string) => {
    const { data } = await api.get(`episode/${id}`);
    return data;
};
