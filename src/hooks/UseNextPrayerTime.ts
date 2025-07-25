import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { fetchNextPrayerTime } from "../services/api/NextPrayerApi";
import { NextPrayerType } from "../services/types/NextPrayerServicesType";

export function useNextPrayerTime() {
  const [coords, setCoords] = useState<{ latitude: string; longitude: string } | null>(null);
  const [data, setData] = useState<NextPrayerType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError(new Error("Konum izni reddedildi"));
          setLoading(false);
          return;
        }
        const location = await Location.getCurrentPositionAsync({});
        setCoords({
          latitude: location.coords.latitude.toString(),
          longitude: location.coords.longitude.toString(),
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Konum alınamadı"));
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!coords) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const now = new Date().toISOString();
        const result = await fetchNextPrayerTime(now, coords.latitude, coords.longitude);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Veri alınamadı"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [coords]);

  return { data, loading, error };
}
