export const umrahToursQueryKey = (type: number) => ["umrahTours", type];

export const umrahToursQueryOptions = {
    staleTime: 1000 * 60 * 5, // 5 dakika cache
    cacheTime: 1000 * 60 * 30, // 30 dakika cache
};
