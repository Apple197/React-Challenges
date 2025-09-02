import MainHeading from "./MainHeading";
import MainOrderList from "./MainOrderList";
import MainBackgroundImage from "./MainBackgroundImage";

function MainContent() {
  return (
    <>
      <div className="main-content">
        <MainHeading />
        <MainOrderList />
      </div>
      <MainBackgroundImage />
    </>
  );
}

export default MainContent;
