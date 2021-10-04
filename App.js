import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
        return (   
          <Formik 
        initialValues= {{
            name:"",
            email:"",
            password:""
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
                .min(2, "Ít nhất 2 kí tự")
                .max(16, "Tối đa 16 kí tự")
                .required("Không để trống!"),
            email: Yup.string()
                .email("Email không đúng định dạng!")
                .required("Không để trống"),
            password: Yup.string()
                .min(6, "Ít nhất 6 kí tự")
                .required("Không để trống"),
        })}
        onSubmit = {values => Alert.alert(JSON.stringify(values))}
         >
          {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                    placeholder="Tên, từ 2 đến 16 kí tự"
                    placeholderTextColor="#003f5c"
                    maxLength = {16}
                    value = {values.name}
                    onBlur = {() => setFieldTouched('name')}
                    onChangeText = {handleChange('name')}/>
                </View>
                {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    value = {values.email}
                    onBlur = {() => setFieldTouched('email')}
                    onChangeText = {handleChange('email')}/>
                </View>
                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Mật khẩu, ít nhất 6 kí tự"
                    placeholderTextColor="#003f5c"
                    secureTextEntry = {true}
                    value = {values.password}
                    onBlur = {() => setFieldTouched('password')}
                    onChangeText = {handleChange('password')}/>
                </View>
                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                <TouchableOpacity style={styles.loginBtn}
                disabled={!isValid}
                onPress = {handleSubmit}>
                    <Text style={styles.loginText}>ĐĂNG KÍ</Text>
                </TouchableOpacity>
            </View>
          )}
            </Formik>
        );
          }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      fontWeight: "bold",
      fontSize: 50,
      color: "#fb5b5a",
      marginBottom: 40
    },
    inputView: {
      width: "80%",
      backgroundColor: "#465881",
      borderRadius: 25,
      height:50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20
    },
    inputText: {
      height: 50,
      color: "white"
    },
    forgot: {
      color: "white",
      fontSize: 11
    },
    loginText: {
      color: "white",
    },
    loginBtn: {
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    error: {
      color: 'red',
      height: 30
    }
  });