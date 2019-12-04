import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

 

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}])
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal = {addGoalHandler}/>
      <ScrollView>
        <View>
          <FlatList 
          keyExtractor={(item, index)=> item.id}
          data ={courseGoals} 
          renderItem={itemData => <GoalItem onDelete={()=>console.log("Does that work?")} title = {itemData.item.value}/>} 
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
}); 
