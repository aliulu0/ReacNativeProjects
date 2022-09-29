import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import AuthErrorMessageParser from '../../../utils/AuthErrorMessageParser';
//components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFormValues = {
  usermail: '',
  password: '',
};
const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const handleSign = () => {
    navigation.navigate('SignPage');
  };

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('RoomsPage');
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
              on
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="Parolanızı giriniz"
              isSecure={true}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleSign} />
    </View>
  );
};
export default Login;
