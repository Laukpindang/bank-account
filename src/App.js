import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";

const ListAccount = lazy(() => import('./pages/list-account'));

const App=() => {
  return(
  <Suspense fallback={<>Loading...</>}>
  <Routes>
    <Route path="/" exact element={<ListAccount/>}/>
    <Route
      path="*"
      element={<ListAccount/>}
    />
  </Routes>
</Suspense>
  )
};

export default App;