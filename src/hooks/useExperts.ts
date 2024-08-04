import axios from "axios";
import { Expert, IExpert } from "models";

import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
} from "@tanstack/react-query";

const baseUrl = import.meta.env.VITE_BASE_URL;

const fetchExperts = async ({ queryKey }: QueryFunctionContext) => {
  const params = JSON.parse(queryKey[1] as string);
  const response = await axios.get<{ results: IExpert[] }>(
    `${baseUrl}/users/experts`,
    { params }
  );
  return response.data;
};

export const useExpertsQuery = (queryKey?: QueryKey) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["experts", queryKey?.[0] || []],
    queryFn: fetchExperts,
  });

  return {
    data: data?.results.map((item) => new Expert(item)),
    error,
    isLoading,
  };
};
