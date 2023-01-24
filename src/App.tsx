import { Footer } from "./components";
import {
  FreeBudget,
  Home,
  Portfolio,
  Services3d,
  SuccessCases,
  WhyUs,
} from "./layouts";

function App() {
  return (
    <main className="w-screen h-fit">
      <Home></Home>
      <Services3d></Services3d>
      <WhyUs></WhyUs>
      <Portfolio></Portfolio>
      {/*<SuccessCases></SuccessCases>*/}
      {/*<FreeBudget></FreeBudget>*/}
      <Footer></Footer>
    </main>
  );
}

export default App;
