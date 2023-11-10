import { Tabs } from "expo-router";

export default function TabRoutesLayout(){
    return(
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen
                name='(initial)/initial'
                options={{title: 'Initial'}}
            />
            <Tabs.Screen
                name='(expenses)/expenses'
                options={{title: 'Expenses'}}
            />
        </Tabs>
    )
}