import { TopAyah } from "../types/TopAyahServicesType";
import { apiClient } from "./apiClient";

export function fetchTopAyah(): Promise<TopAyah> {
    return apiClient<TopAyah>({
        url: "/Quran/GetRandom",
    });
}

