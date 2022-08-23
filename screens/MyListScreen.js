/* eslint-disable prettier/prettier */
/* eslint-disable no-sparse-arrays */
import React, {useState} from 'react';

import {View} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Spain', value: 'spain'},
    {label: 'Madrid', value: 'madrid'},
    {label: 'Barcelona', value: 'barcelona'},

    {label: 'Italy', value: 'italy'},
    {label: 'Rome', value: 'rome'},

    {label: 'Finland', value: 'finland'},
    ,
  ]);

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View>
        <DropDownPicker
          style={{width: 130, backgroundColor: 'green'}}
          placeholder="City"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <View>
        <DropDownPicker
          style={{width: 130, backgroundColor: 'green'}}
          placeholder="Country"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </View>
  );
}
