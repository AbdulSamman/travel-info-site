import { NavLink, Routes, Route } from "react-router-dom";
import { PageParis } from "./PageParis";
import { PageBordeaux } from "./PageBordeaux";
import { Page404 } from "./Page404";
import { PageBlank } from "./PageBlank";
export const PageFrance = () => {
  return (
    <>
      <p>welcome to the France page</p>
      <nav>
        <NavLink to="paris">Paris</NavLink>
        <NavLink to="bordeaux">Bordeaux</NavLink>
      </nav>
      <Routes>
        <Route path="paris" element={<PageParis />} />
        <Route path="bordeaux" element={<PageBordeaux />} />
        <Route path="/" element={<PageBlank />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
