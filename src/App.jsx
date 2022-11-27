import SideMenu from "./Components/SideMenu"
import SidePortfolio from "./Components/SidePortfolio"
import Main from "./Components/Main"
function App() {
  return (
    <div className=" w-[98%] mt-[15px] justify-between m-auto flex  relative text-white">
      <SidePortfolio />
      <Main />
      <SideMenu />
    </div>
  );
}

export default App; 
