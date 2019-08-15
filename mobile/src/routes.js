import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//createStackNavigator Cria navegação com possibilidade de back no topbar
//createDrawerNavigator Cria navegação com menu lateral que pode ser arrastado para a tela a qualquer momento
//createBottomNavigator Cria navegação por abas na parte inferior
//createMaterialTopTabNavigator Cria navegação de abas no estilo Material na parte superior

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main
    })
);