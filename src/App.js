import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Column1 } from "./pages/dashboard/column1";
import { Column2 } from "./pages/dashboard/column2";
import { Column3 } from "./pages/dashboard/column3";
const App = () => (
  <div className="App">
    <Layout>
      <Routes>
        <Route path="/*" element={<Column1 />} />
        <Route path="/column1" element={<Column1 />} />
        <Route path="/column2" element={<Column2 />} />
        <Route path="/column3" element={<Column3 />} />
      </Routes>
    </Layout>
  </div>
);

export default App;
