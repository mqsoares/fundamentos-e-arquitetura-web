import api from "../api";

export const getEpisodes = async () => {
    const { data } = await api.get(`episode/?page=1`);
    return data.results;
};

export const getEpisode = async (id: string) => {
    const { data } = await api.get(`episode/${id}`);
    return data;
};
