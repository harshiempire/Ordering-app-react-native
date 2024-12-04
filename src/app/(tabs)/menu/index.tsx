import { StyleSheet, Image, ScrollView, FlatList } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import ProductListItem from "@/src/components/ProductListItem";
import products from "../../../../assets/data/products";
import Colors from "@/constants/Colors";

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10 , padding:10, borderRadius: 10,}}
        columnWrapperStyle={{ gap: 15 }}
      />
    </View>
  );
}
