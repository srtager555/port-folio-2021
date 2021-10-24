import MyPortfolio from "../../Pages/MyPortfolio";
import TheOne from "../../Pages/TheOne";
import Template from "../../Pages/Template";
import WrappingLetter from "../../Pages/WrappigLetter";

const Content = [ <TheOne />, <MyPortfolio />];
{/* <Template />, <WrappingLetter />, */}
export function InformationPages({ id }) {
  let ContentPage = Content[id];
  return [ContentPage];
}
