import { StyleSheet, Image, Pressable } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Product } from "@/assets/data/types";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

type ProductItemProps = {
  product: Product;
};

export default function ProductListItem({ product }: ProductItemProps) {
  return (
    <Link href={`../${product.id}`} asChild>
      <Pressable style={styles.rootContainer}>
        <View style={[styles.container, styles.shadowProp]}>
          <Image
            source={{
              uri:
                product.image ||
                "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png",
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: "50%",
    padding: 10,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 7,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
    fontSize: 16,
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
