import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layout
import RootLayout from "./layouts/RootLayout";
import Explore from "./pages/Explore";
import Favorit from "./pages/Favorit";
import ShopLayouts from "./layouts/ShopLayouts";

// Shop Layout
import History from "./pages/Shop/History";
import StoreContextProvider from "./context/StoreContext";
import DetailItem from "./pages/DetailItem";
import Cart from "./pages/Shop/Cart";
import DetailHistory from "./pages/Shop/DetailHistory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/m-store/"
      element={
        <StoreContextProvider>
          <RootLayout />
        </StoreContextProvider>
      }
    >
      <Route index element={<Explore />} />
      <Route path="shop" element={<ShopLayouts />}>
        <Route index element={<Cart />} />
        <Route path="history" element={<History />} />
      </Route>
      <Route path="favorit" element={<Favorit />} />
      <Route path="detail/:id" element={<DetailItem />} />
      <Route path="shop/history/:id" element={<DetailHistory />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
