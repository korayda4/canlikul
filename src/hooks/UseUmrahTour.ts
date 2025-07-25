import { useQuery } from "@tanstack/react-query";
import { fetchUmrahTourDetail, fetchUmrahTours } from "../services/api/UmrahTourApi";
import { umrahToursQueryKey, umrahToursQueryOptions } from "../services/query/UmrahTourQuery";
import { UmrahTour } from "../services/types/UmrahTourServicesType";

export function useUmrahTour(type: number) {
  const queryKey = umrahToursQueryKey(type);
  const queryFn = () => fetchUmrahTours(type);

  return useQuery<UmrahTour[], Error>({
    queryKey,
    queryFn,
    ...umrahToursQueryOptions,
    enabled: typeof type == "number",
  });
}

export function useUmrahTourDetail(id: number) {
  const queryKey = umrahToursQueryKey(id);
  const queryFn = () => fetchUmrahTourDetail(id);

  return useQuery<UmrahTour, Error>({
    queryKey,
    queryFn,
    ...umrahToursQueryOptions,
    enabled: typeof id == "number",
  });
}
