import CustomSidebar from "./components/CustomSidebar";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from "./Context/ProductContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ProductProvider>
        <div className="flex ">
          <CustomSidebar />
          <main className="w-full h-full">
            <Dashboard />
          </main>

          <ToastContainer />
        </div>
      </ProductProvider>
    </QueryClientProvider>
  );
}

export default App;
