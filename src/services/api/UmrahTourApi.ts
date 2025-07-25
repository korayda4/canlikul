import { apiClient } from "./apiClient";
import { UmrahTour } from "../types/UmrahTourServicesType";

export function fetchUmrahTours(type: number): Promise<UmrahTour[]> {
  return apiClient<UmrahTour[]>({
    url: "/UmrahTour/GetAll",
    query: { type },
  });
}

export function fetchUmrahTourDetail(id: number): Promise<UmrahTour> {
  return apiClient<UmrahTour>({
    url: `/UmrahTour/Get/${id}`,
  });
}
