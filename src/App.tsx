import React from "react";

import { Pages } from "pages";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-h-screen">
        <div className="flex flex-col mx-20 gap-2">
          <div className="bg-slate-500 p-4 text-center">Header</div>

          <Pages.Advisors />
        </div>
        <div className="bg-green-600 p-32 text-center">Footer</div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
