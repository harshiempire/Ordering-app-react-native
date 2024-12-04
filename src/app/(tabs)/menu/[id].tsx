import { View, Text } from "../../../components/Themed";
import { useLocalSearchParams } from "expo-router";
const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Product Page for id:{id}</Text>
    </View>
  );
};
export default ProductDetails;
