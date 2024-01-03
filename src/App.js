import logo from "./logo.svg";
import "./App.css";
import Page from "./apis/core";
import Page2 from "./apis/coree";
import MainPage from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={createBrowserRouter([{ path: "/", element: <MainPage /> }])}
      />
    </QueryClientProvider>
  );
}

export default App;
