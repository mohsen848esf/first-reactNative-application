import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import * as Location from "expo-location";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("عنوان"),
  price: Yup.number().required().min(1).max(10000).label("قیمت"),
  description: Yup.string().label("توضیحات"),
  category: Yup.object().required().nullable().label("دسته بندی"),
  images: Yup.array().min(1, "لطفا یک تصویر انتخاب کنید.").label("تصاویر"), //images field is required
});

const categories = [
  { label: "مبلمان", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "تن پوش", value: 2, backgroundColor: "green", icon: "email" },
  { label: "دوربین ها", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen(props) {
  // const location = useLocation();
  const [location, setLocation] = useState({});
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      console.log("latitude", latitude, "longitude:", longitude);
      setLocation({ name: "mohsen" });
      // setLocation({ latitude, longitude, granted, name: "mohsen" });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(async () => {
    getLocation();
  }, []);
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: null,
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("values", location, ":ss")}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="عنوان" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="قیمت"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="دسته بندی"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="توضیحات"
        />
        <SubmitButton title="ثبت" width={300} />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "flex-end" },
});

export default ListingEditScreen;
