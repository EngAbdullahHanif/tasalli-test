import Header from "./header";
import FirstBlock from "./first-block";
import SecondBlock from "./second-block";
import ThirdBlock from "./third-block";
import FourthBlock from "./fourth-block";
import Footer from "./footer";

function Home() {
  return (
    <>
      <div className="">
        <Header />
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
        <Footer />
      </div>
    </>
  );
}

export default Home;
