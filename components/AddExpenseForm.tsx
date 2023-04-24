import React, { useState } from "react";
import { Expense } from "../types/expense";
import { categories } from "../data/categories";
import { newDateAdjusted } from "../helpers/dateFilter";
import { Button, Overlay, Icon, Input } from '@rneui/themed';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from "./SelectDropdown";

export default function AddExpenseForm({ onAdd }: {onAdd: (expense: Expense) => void}){

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState();
  const [show, setShow] = useState(false);

  const onChange = ({event, selectedDate}: {event: any; selectedDate: any}) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState<number>(0);

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    };
  
    let categoryKeys: string[] = Object.keys(categories);
  
    const handleAddEvent = () => {
      let errors: string[] = [];
      if(isNaN(new Date(dateField).getTime())) {
        errors.push('Invalid date!');
      }
      if(!categoryKeys.includes(categoryField)) {
        errors.push('Invalid category!');
      }
      if(titleField === '') {
        errors.push('Invalid Title!');
      }
      if(valueField <= 0) {
        errors.push('Invalid value!');
      }
      if(errors.length > 0) {
        alert(errors.join("\n"));
      } else {
        onAdd({
          date: newDateAdjusted(dateField),
          category: categoryField,
          title: titleField,
          value: valueField
        });
        clearFields();
      }
    }
  
    const clearFields = () => {
      setDateField('');
      setCategoryField('');
      setTitleField('');
      setValueField(0);
    }

    return(
      <View style={{marginBottom: 16}}>
      <Button
        title="Open Overlay"
        onPress={toggleOverlay}
        buttonStyle={{borderRadius: 12, }}
        // type="solid"
        // radius={'sm'}
        containerStyle={styles.buttonContainer}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} style={{borderRadius: 12}}>
        <Text style={styles.textPrimary}>Hello!</Text>
        <Input
          placeholder='Value'
          inputContainerStyle={styles.textInput}
        />
        <Input
          placeholder='Title'
          inputContainerStyle={styles.textInput}
        />
        {/* <Input
          placeholder='Category'
          inputContainerStyle={styles.textInput}
        /> */}
        <SelectDropdown options={categoryKeys}></SelectDropdown>
        {/* <Picker
        value={categoryField}
        >
          
        </Picker> */}
        {/* <DateTimePicker mode="time" /> */}
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
          <Button onPress={showTimepicker} title="Show time picker!" />
          <Text>selected: {date.toLocaleString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={() => onChange}
            />
          )}
        </View>


        <Button
          icon={
            <Icon
              name="wrench"
              type="font-awesome"
              color="white"
              size={25}
              iconStyle={{ marginRight: 10 }}
            />
          }
          title="Start Building"
          onPress={toggleOverlay}
        />
      </Overlay>
    </View>
    )
}

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'stretch'
    alignItems: 'center'
  },
  button: {
    margin: 10,
    width: '100%',
    borderBottomRightRadius: 12
    // borderRadius: 12,
    // elevation: 0
  },
  buttonContainer: {
    // borderRadius: 12
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold"
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
  textInput: {
    width: '70%'
  }
});
  