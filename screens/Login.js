import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";

// Formik
import {Formik} from 'formik';

// icons
import {Octicons, Ionicons} from "@expo/vector-icons";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledButton,
    StyledInputLabel,
    StyledTextInput,
    Colors
} from "../components/styles";
import {View} from "react-native";

const {brand, darkLight} = Colors;
const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer style={"dark"}>
            <InnerContainer>
                <PageLogo resizeMode={"cover"} source={require('./../assets/img/flower_crib_shots.png')}/>
                <PageTitle>Flower Crib</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{email: "", password: ""}}
                    onSubmit={(values) => console.log(values)}>
                    {
                        ({handleBlur, handleChange, handleSubmit, values}) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Email Address"
                                    placeholder="andyj@gmail.com"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                    icon="mail"
                                />
                                <MyTextInput
                                    label="Password"
                                    placeholder="* * * * * * * *"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    icon="lock"
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                            </StyledFormArea>
                        )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon
                    onPress={() => {
                        setHidePassword(!hidePassword);
                    }}
                >
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default Login;