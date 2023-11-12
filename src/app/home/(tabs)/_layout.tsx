import { Tabs } from "expo-router";
import {MaterialIcons} from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';

export default function TabRoutesLayout(){
    return(
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen
                name='(initial)/initial'
                options={{
                    title: 'Initial',
                    tabBarIcon: ({ size, color }) => (<MaterialIcons name='home' size={size} color={color}/>)
                }}
            />
            <Tabs.Screen
                name='(expenses)/expenses'
                options={{
                    title: 'Expenses',
                    tabBarIcon: ({ size, color }) => (<FontAwesome name="money" size={24} color="black" />)
                }}
            />
        </Tabs>
    )
}