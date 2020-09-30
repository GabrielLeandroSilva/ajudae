import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #F5F6FC;
    flex: 1;
    align-items: center;
`;

export const Scroller = styled.ScrollView`
    width: 100%;
    flex: 1;
    padding: 0 40px 0 40px;
    margin-top: 10%;
`;

export const HeaderArea = styled.View`
    width: 100%;
    margin-bottom: 24px;
`;

export const BlueSquare = styled.View`
    width: 45px;
    height: 43px;
    color: #262626;
    background-color: #1890FF;
    border-radius: 12px;
    margin-bottom: 28px;
`;
export const WelcomeText = styled.Text`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 15px;
`;
export const WelcomeDescription = styled.Text`
    font-size: 24px;
    color: #262626;
`;

export const ButtonArea = styled.View`
    width: 100%;
`;

export const CustomOngs = styled.TouchableOpacity`
    width: 100%;
    height: 190px;
    background-color: #FFF;
    padding: 19px;
    border-radius: 25px;
    border-width: 1px;
    border-color: #DDD;
    shadow-opacity: 0.9;
    elevation: 3;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const CustomOngTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #262626;
    margin-bottom: 6px;
`;

export const CustomOngCreated = styled.Text`
    font-size: 14px;
    color: #96A7AF;
    margin-bottom: 12px;
`;

export const CustomOngDescription = styled.Text`
    font-size: 14px;
    color: #262626;
    text-align: justify;
`;