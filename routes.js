import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import ProvidersPage from "./pages/ProvidersPage";
import ProviderDetailPage from "./pages/ProviderDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: ProvidersPage },
      { path: "provider/:id", Component: ProviderDetailPage },
    ],
  },
]);
