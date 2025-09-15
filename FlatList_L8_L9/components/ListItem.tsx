import { dataType } from "@/data/appData";
import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

// declare data type for props here
// I am giving this LitItem component the data it needs
// to display, the status of what is selected, and the ability
// to update the selected status when clicked on
type propsType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void;
}

const ListItem:React.FC<propsType> = ({item, isSelected, onPress}) => {
  return (
    <TouchableOpacity onPress={() => selectedList(item)}>
                <View style = {[styles.FlatListRow, 
                  {
                    backgroundColor: item.id === selectedId
                    ? colors.primary
                    : colors.secondary,
                  }
                ]}>
                  <Text style = {[styles.titleText,
                    {
                      color:
                        item.id === selectedId
                          ? colors.text.light
                          : colors.text.dark

                    }
                  ]}>{item.title}</Text>
                </View>
              </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  FlatListRow: {
    backgroundColor: "gold",
    marginBottom: 10,
    padding: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
})

;
