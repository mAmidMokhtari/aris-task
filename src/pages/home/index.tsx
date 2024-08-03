import React from "react";

import ExpertCard from "components/ExpertCard";
import FilterBar from "components/FilterBar";
import SearchBar from "components/SearchBar";
import { useExperts } from "hooks/useExperts";

const Home: React.FC = () => {
  const { data: experts, isLoading, error } = useExperts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading experts</div>;

  return (
    <div className="p-4">
      <SearchBar />
      <FilterBar />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {experts?.map((expert) => (
          <ExpertCard
            key={expert.id}
            name={expert.name}
            rating={expert.rating}
            specialties={expert.specialties}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
