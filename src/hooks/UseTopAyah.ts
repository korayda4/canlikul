import { useQuery } from "@tanstack/react-query";
import { TopAyah } from "../services/types/TopAyahServicesType";
import { TopAyahQuery, topAyahQuerySettings } from "../services/query/TopAyahQuery";
import { fetchTopAyah } from "../services/api/TopAyahApi";

export function useTopAyah() {
    const queryKey = TopAyahQuery();
    const queryFn = () => fetchTopAyah();

    return useQuery<TopAyah, Error>({
        queryKey,
        queryFn,
        ...topAyahQuerySettings,
    });
}