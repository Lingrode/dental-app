import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'SFUIText-Regular': require('./assets/fonts/sfuitext-regular.otf'),
    'SFUIText-Semibold': require('./assets/fonts/sfuitext-semibold.otf'),
    'SFUIText-Bold': require('./assets/fonts/sfuitext-bold.otf'),
    'SFUIText-Heavy': require('./assets/fonts/sfuitext-heavy.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Container onLayout={onLayoutRootView}>
      <Group>
        <GroupTitle>11 вересня</GroupTitle>
        <GroupItem>
          <Avatar
            source={{
              uri: "https://yt3.ggpht.com/yti/ADpuP3NMctzRLZpWYsZaPxro2UJp4T_qs2qVmV3Rh5S0Qg=s88-c-k-c0x00ffffff-no-rj"
            }}
          />
          <View style={{ flex: 1 }}>
            <FullName>Софія Євтушенко</FullName>
            <GrayText>пульпіт, видалення зуба</GrayText>
          </View>
          <GroupDate active>12:30</GroupDate>
        </GroupItem>

        <GroupItem>
          <Avatar
            source={{
              uri: "https://avatars.githubusercontent.com/u/61691890?v=4"
            }}
          />
          <View style={{ flex: 1 }}>
            <FullName>Тетяна Бондаренко</FullName>
            <GrayText>періодонтит</GrayText>
          </View>
          <GroupDate>14:00</GroupDate>
        </GroupItem>
      </Group>
    </Container>
  );
}



const GroupDate = styled.Text`
  background: ${props => props.active ? '#2A86FF' : '#E9F5FF'};
  color: ${props => props.active ? '#fff' : '#4294FF'};
  border-radius: 18px;
  font-family: 'SFUIText-Bold';
  text-align: center;
  font-size: 18px;
  width: 75px;
  height: 35px;
  line-height: 38px;
`;

const GrayText = styled.Text`
  font-family: 'SFUIText-Regular';
  color: #8B979F;
  font-size: 18px;
`;

const FullName = styled.Text`
  font-family: 'SFUIText-Bold';
  font-size: 18px;

`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const GroupItem = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #F3F3F3;
`;

const GroupTitle = styled.Text`
  font-family: 'SFUIText-Bold';
  color: #000;
  font-size: 24px;
  
  line-height: 30px;
`;

const Group = styled.View`
  padding: 0 25px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;