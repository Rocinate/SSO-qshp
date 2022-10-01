
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from '@/pages/Layout'

import useAppStateContext, { AppContext } from "./state";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
