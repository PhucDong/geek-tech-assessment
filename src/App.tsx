import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import DetailedAlbumInfoPage from "./pages/DetailedAlbumInfoPage";
import DetailedUserInfoPage from "./pages/DetailedUserInfoPage";
import AlbumsPage from "./pages/AlbumsPage";
import UsersPage from "./pages/UsersPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      {/* Default route to redirect to /albums */}
      <Route path="/" element={<Navigate to="/albums" />} />

      <Route path="/albums" element={<AlbumsPage />} />
      <Route path="/albums/:albumIdParam" element={<DetailedAlbumInfoPage />} />

      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:userIdParam" element={<DetailedUserInfoPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
