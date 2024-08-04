import axios from "axios";
import { useStore } from "store/useStore";

import { useQuery } from "@tanstack/react-query";

const fetchExperts = async () => {
  const { sort, gender, acceptsInsurance, search } =
    useStore.getState().filters;
  const params = new URLSearchParams();
  if (sort) params.append("sort", sort);
  if (gender !== null) params.append("gender", gender.toString());
  if (acceptsInsurance !== null)
    params.append("accepts_insurance", acceptsInsurance.toString());
  if (search) params.append("search", search);

  const response = await axios.get(
    "https://api.haalekhoob.net/users/experts/",
    { params }
  );
  return response.data;
};

export const useExpertsQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["experts"],
    queryFn: fetchExperts,
  });
  const setExperts = useStore((state) => state.setExperts);
  if (data) setExperts(data);

  return { data, error, isLoading };
};
