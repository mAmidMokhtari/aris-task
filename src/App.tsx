import React from 'react';

import Home from 'pages/home';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto container">
        <Home />
      </div>
    </QueryClientProvider>
  );
};

export default App;
