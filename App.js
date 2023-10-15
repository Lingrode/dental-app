// import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet } from 'react-native';
import { useCallback } from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import * as SplashScreen from 'expo-splash-screen';

import { Appointment, SectionTitle } from './components';

const DATA = [
  {
    title: '20 жовтня',
    data: [
      {
        time: '15:30',
        diagnosis: 'пульпіт',
        active: true,
        user: {
          fullname: 'Вася Пупкін',
          avatar: 'https://avatars.githubusercontent.com/u/61691890?v=4'
        }
      },
      {
        time: '16:30',
        diagnosis: 'чистка зубів',
        user: {
          fullname: 'Ілля Гримало',
          avatar: 'https://yt3.ggpht.com/yti/ADpuP3NMctzRLZpWYsZaPxro2UJp4T_qs2qVmV3Rh5S0Qg=s88-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        time: '15:30',
        diagnosis: 'пульпіт',
        active: true,
        user: {
          fullname: 'Вася Пупкін',
          avatar: 'https://avatars.githubusercontent.com/u/61691890?v=4'
        }
      },
      {
        time: '16:30',
        diagnosis: 'чистка зубів',
        user: {
          fullname: 'Ілля Гримало',
          avatar: 'https://yt3.ggpht.com/yti/ADpuP3NMctzRLZpWYsZaPxro2UJp4T_qs2qVmV3Rh5S0Qg=s88-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        time: '15:30',
        diagnosis: 'пульпіт',
        active: true,
        user: {
          fullname: 'Вася Пупкін',
          avatar: 'https://avatars.githubusercontent.com/u/61691890?v=4'
        }
      },
      {
        time: '16:30',
        diagnosis: 'чистка зубів',
        user: {
          fullname: 'Ілля Гримало',
          avatar: 'https://yt3.ggpht.com/yti/ADpuP3NMctzRLZpWYsZaPxro2UJp4T_qs2qVmV3Rh5S0Qg=s88-c-k-c0x00ffffff-no-rj'
        }
      },
    ]
  },
  {
    title: '23 жовтня',
    data: [
      {
        time: '15:30',
        diagnosis: 'пульпіт',
        user: {
          fullname: 'Вася Пупкін',
          avatar: 'https://avatars.githubusercontent.com/u/61691890?v=4'
        }
      },
      {
        time: '16:30',
        diagnosis: 'чистка зубів',
        user: {
          fullname: 'Ілля Гримало',
          avatar: 'https://yt3.ggpht.com/yti/ADpuP3NMctzRLZpWYsZaPxro2UJp4T_qs2qVmV3Rh5S0Qg=s88-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        time: '15:30',
        diagnosis: 'пульпіт',
        user: {
          fullname: 'Вася Пупкін',
          avatar: 'https://avatars.githubusercontent.com/u/61691890?v=4'
        }
      },
      {
        time: '16:30',
        diagnosis: 'чистка зубів',
        user: {
          fullname: 'Ілля Гримало',
          avatar: 'https://yt3.ggpht.com/yti/ADpuP3NMctzRLZpWYsZaPxro2UJp4T_qs2qVmV3Rh5S0Qg=s88-c-k-c0x00ffffff-no-rj'
        }
      }
    ]
  },
];

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

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (<Appointment {...item} />)}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton style={{
        shadowColor: "#2A86FF",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 2.5,

        elevation: 5,
      }}>
        <Ionicons name='ios-add' size={32} color="white" style={style.child} />
      </PlusButton>
    </Container >
  );
}

const PlusButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50px;
  width: 65px;
  height: 65px;
  background-color: #2A86FF;
  position: absolute;
  right: 25px;
  bottom: 25px;
`

const style = StyleSheet.create({
  child: {
    top: 0,
    left: 1,
  }
})

const Container = styled.View`
  flex: 1;
  margin-top: 25px;
`;