import axios from "axios";
import { Expert, IExpert } from "models";
import { useStore } from "store/useStore";

import { useQuery } from "@tanstack/react-query";

const baseUrl = import.meta.env.VITE_BASE_URL;

const fetchExperts = async () => {
  const { sort, gender, acceptsInsurance, search } =
    useStore.getState().filters;
  const params = new URLSearchParams();
  if (sort) params.append("sort", sort);
  if (gender !== null) params.append("gender", gender.toString());
  if (acceptsInsurance !== null)
    params.append("accepts_insurance", acceptsInsurance.toString());
  if (search) params.append("search", search);

  const response = await axios.get<{ results: IExpert[] }>(
    `${baseUrl}/users/experts/`,
    {
      params,
    }
  );
  return response.data;
};

export const useExpertsQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["experts"],
    queryFn: fetchExperts,
  });

  return {
    data: data?.results.map((item) => new Expert(item)),
    error,
    isLoading,
  };
};
