import Sidebar from "./Sidebar";

function SidesBar() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
    </div>
  );
}

export default SidesBar;
