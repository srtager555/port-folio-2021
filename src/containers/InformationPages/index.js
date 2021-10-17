import MyPortfolio from "../../Pages/MyPortfolio";
import TheOne from "../../Pages/TheOne";
import Template from "../../Pages/Template";

const Content = [<Template />, <TheOne />, <MyPortfolio />];

export function InformationPages({ id }) {
  let ContentPage = Content[id];
  return [ContentPage];
}
