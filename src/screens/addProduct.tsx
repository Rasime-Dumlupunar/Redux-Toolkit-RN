import React from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import Input from '../components/UI/Input';
import Button from '../components/UI/button';
import * as Yup from 'yup';
import MyImagePicker from '../components/UI/imagePicker';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/slice/productSlice';

const AddProduct: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();
  const productShema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Çok kısa!')
      .max(500, 'Çok uzun!')
      .required('Zorunlu'),
    brand: Yup.string()
      .min(2, 'Çok kısa!')
      .max(50, 'Çok uzun!')
      .required('Zorunlu'),
    description: Yup.string()
      .min(5, 'Çok kısa!')
      .max(500, 'Çok uzun')
      .required('Zorunlu'),
    price: Yup.string().required('Zorunlu'),
    image: Yup.string().required('Zorunlu'),
  });
  const handleAddProduct = (product: any) => {
    dispatch(addProduct(product));
    Alert.alert('Ürün başarıyla eklendi', 'Ürün başarılı bir şekilde eklendi', [
      {
        text: 'Yeniden Ekle',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Tamam',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <View>
      <ScrollView>
        <Formik
          initialValues={{
            id: Math.random().toString(36).substring(2, 9),
            name: 'Nem Terapisi Aloe Vera Suyu Normalden Karmaya Ciltler',
            brand: 'LOreal Paris',
            description:
              'HIZLI VE GÖZLE GÖRÜLEBİLİR SONUÇLAR ANINDA: Daha ferah, yumuşak, esnek ve canlı görünen bir cilt.',
            price: '550',
            image: '',
            count: '1',
          }}
          validationSchema={productShema}
          onSubmit={handleAddProduct}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            setFieldValue,
          }) => (
            <View style={{ flex: 1 }}>
              <Input
                onChangeText={handleChange('name')}
                placeholder="Ürün adını giriniz"
                value={values.name}
                label="Ürün Adı"
                error={errors.name}
              />
              <Input
                onChangeText={handleChange('brand')}
                placeholder="Ürün markasını giriniz"
                value={values.brand}
                label="Ürün Markası"
                error={errors.brand}
              />
              <Input
                onChangeText={handleChange('description')}
                placeholder="Ürün açıklamasını giriniz"
                value={values.description}
                label="Ürün Açıklaması"
                error={errors.description}
              />
              <Input
                onChangeText={handleChange('price')}
                placeholder="Ürün fiyatını giriniz"
                value={values.price}
                label="Ürün Fiyatı"
                error={errors.price}
              />
              <Input
                onChangeText={handleChange('count')}
                placeholder="Ürün adetini giriniz"
                value={values.count}
                label="Ürün Adeti"
                error={errors.count}
              />
              <MyImagePicker
                label="Ürün Resmi"
                placeholder="Ürün resmini seçiniz"
                value={values.image}
                error={errors.image}
                handleSelectImage={(image: any) =>
                  setFieldValue('image', image.sourceURL)
                }
              />
              <Button onPress={handleSubmit} name="Kaydet" />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default AddProduct;
