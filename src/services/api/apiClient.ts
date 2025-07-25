import axios, { AxiosRequestConfig } from "axios";
import Constants from "expo-constants"; // expo kullanıyorsan bu satır geçerli
// Eğer react-native-dotenv kullanıyorsan onunla değiştir: import { API_BASE_URL } from '@env';

const BASE_URL = Constants?.expoConfig?.extra?.API_BASE_URL || "https://api.canlikulturizm.com/api";

type ApiClientParams = {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    query?: Record<string, string | number | boolean>;
    body?: any;
    headers?: Record<string, string>;
};

function buildQueryString(query?: ApiClientParams["query"]) {
    if (!query) return "";
    const searchParams = new URLSearchParams();
    for (const key in query) {
        const value = query[key];
        if (value !== undefined && value !== null) {
            searchParams.append(key, String(value));
        }
    }
    return `?${searchParams.toString()}`;
}

export async function apiClient<T>({
    url,
    method = "GET",
    query,
    body,
    headers = {},
}: ApiClientParams): Promise<T> {
    const queryString = buildQueryString(query);
    const fullUrl = `${BASE_URL}${url}${queryString}`;
    const config: AxiosRequestConfig = {
        url: fullUrl,
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        data: body,
    };

    try {
        const response = await axios<T>(config);
        return response.data;
    } catch (error: any) {
        const errorMessage = error?.response?.data || error.message;
        throw new Error(`API Error: ${errorMessage}`);
    }
}
