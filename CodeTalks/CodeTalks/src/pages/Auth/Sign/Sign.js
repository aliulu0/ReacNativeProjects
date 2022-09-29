import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './Sign.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import AuthErrorMessageParser from '../../../utils/AuthErrorMessageParser';
import {showMessage} from 'react-native-flash-message';

//components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.goBack();
  };
  const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
  };

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor!',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu!',
        type: 'success',
      });
      navigation.navigate('LoginPage');
      setLoading(false);
    } catch (error) {
      console.log(error);

      showMessage({
        message: AuthErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>CodeTalks</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onType={handleChange('usermail')}
              placeholder="E-mail giriniz"
              isSecure={false}
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="Parolanızı giriniz"
              isSecure={true}
            />
            <Input
              value={values.repassword}
              onType={handleChange('repassword')}
              placeholder="Parolanızı tekrar giriniz"
              isSecure={true}
            />
            <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Geri Dön" theme="secondary" onPress={handleLogin} />
    </View>
  );
};
export default Sign;
