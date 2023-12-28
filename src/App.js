import logo from "./logo.svg";
import "./App.css";
import Page from "./apis/core";
import Page2 from "./apis/coree";
import MainPage from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  // return <Page />;
  // return <Page2 />;
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <MainPage />;
    </QueryClientProvider>
  );
}

export default App;
