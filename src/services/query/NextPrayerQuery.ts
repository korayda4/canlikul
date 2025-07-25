export const nextPrayerQueryKey = (date: string, lat: string, lon: string) => ["nextPrayer", date, lat, lon];

export const nextPrayerQueryOptions = {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30, 
};
