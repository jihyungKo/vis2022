import { createStackNavigator, createAppContainer } from "react-navigation";

import Main from "../Components/Main";
import Game from "../Components/Game";
​
const MainNavigation = createStackNavigator(
 {
    Main: Main,
    Game: Game
 },
 {}
);
​
export default createAppContainer(MainNavigation);