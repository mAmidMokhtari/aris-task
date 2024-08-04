import React from "react";

import { Advisors } from "pages";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-h-screen">
        <div className="flex flex-col gap-2 mx-20">
          <div className="bg-gray-500 p-4 text-center">Header</div>
          <Advisors />
        </div>
        <div className="bg-green-600 p-32 text-center">Footer</div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
