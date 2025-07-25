import { apiClient } from "./apiClient";
import { NextPrayerType } from "../types/NextPrayerServicesType";

export async function fetchNextPrayerTime(
  date: string,
  lat: string,
  lon: string
): Promise<NextPrayerType> {
  const response = await apiClient<NextPrayerType>({
    url: `/PrayerTimes/GetNextPrayerTime/${date}/${lat}/${lon}`,
  });

  return response;
}
