import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from '@/pages/Layout'
import { useSearchParams } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const redirect = searchParams.get("redirect")
    // 默认跳转设定
    if (!redirect || redirect.indexOf("bbs")==-1) {
      setSearchParams({redirect: "http://bbs.uestc.edu.cn/"})
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
