import React from 'react';

import { ExpertCard } from 'components/ExpertCard';
import { FilterBar } from 'components/FilterBar';
import { SearchBar } from 'components/SearchBar';
import { useExperts } from 'hooks/useExperts';
import { IData } from 'types';

const Home: React.FC = () => {
  const { data: experts, isLoading, error } = useExperts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading experts</div>;

  return (
    <div>
      <SearchBar />
      <FilterBar />
      <div>
        {experts?.results?.map((expert: IData) => (
          <ExpertCard key={expert.id} name={expert.name} rating={expert.rate} />
        ))}
      </div>
    </div>
  );
};

export default Home;
