import api from "../api";

export const getLocations = async (page: number) => {
    const { data } = await api.get(`location/?page=${page}`);
    return data;
};

export const getLocation = async (id: string) => {
    const { data } = await api.get(`location/${id}`);
    return data;
};

export const getLocationPath = async (pathURL: string) => {
    const { data } = await api.get(`${pathURL}`);
    return data;
};
