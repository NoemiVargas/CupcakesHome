import Cupcakes from "./cupcakes";
import Banner from "../sections/Banner"

const Home = () => (
  <>
    <Banner />
    <Cupcakes peticion="cupcakes?sabor_like=fresa" />
  </>
);
export default Home;
