import { createDrawerNavigator } from '@react-navigation/drawer';
import Principal from '../pages/Principal';

const Drawer = createDrawerNavigator();

function Menu() {
    return (
        <Drawer.Navigator initialRouteName="Conta">
            <Drawer.Screen name="Conta" component={Principal} />
            <Drawer.Screen name="Rank" component={Principal} />
            <Drawer.Screen name="Amizades" component={Principal} />
        </Drawer.Navigator>
    );
}

export default Menu;