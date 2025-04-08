import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchCars() {
  const token = localStorage.getItem("authToken") || null

  const fetchData = async () => {
    const response = await axios.get(
      "https://lightskyblue-wasp-865031.hostingersite.com/cars",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        },
      }
    );
    return response.data.data;
  };

  const { isLoading, data, error } = useQuery({
    queryKey: ["CarsData", token],
    queryFn: fetchData,
    enabled: !!token,
  });

  return { isLoading, data, error };
}
