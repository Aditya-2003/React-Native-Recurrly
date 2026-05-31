import { Tabs } from 'expo-router';
import React from 'react';
import { tabs } from '../../constants/data';
import { View, Image } from 'react-native';
import "../../global.css"
import clsx from 'clsx';

export default function TabLayout() {
 const TabIcon = ({focused, icon} : TabIconProps) => {
    return (
      <View className="tabs-icon">
           <View className={clsx("tabs-pill", focused && "tabs-active")}>
                <Image source={icon} resizeMode="contain" className="tabs-glyph" />
           </View>
      </View>
    )
 }
  return (

    <Tabs screenOptions={{
      }}>
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{ 
              title: tab.title, 
              tabBarIcon: ({focused}) => (
                  <TabIcon focused={focused} icon={tabs.icon} />
              )
            }}
          />
        ))}
    </Tabs>
  );
}