import { Route } from "react-router-dom";

import { CreateAuctionPage } from "./pages";

import { Pages } from "~/types";

export const sellRoutes = (
  <Route path={Pages.sell} element={<CreateAuctionPage />} />
);