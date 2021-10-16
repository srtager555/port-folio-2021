import MyPortfolio from "../../Pages/MyPortfolio";
import TheOne from "../../Pages/TheOne";

const Content = [<TheOne />, <MyPortfolio />];

export function InformationPages({ id }) {
  let ContentPage = Content[id];
  return [ContentPage];
}
