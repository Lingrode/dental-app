// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import { useCallback } from 'react';
import styled from 'styled-components/native';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

const Group = ({ user, diagnosis, active, time }) => {
  return (
    <GroupItem>
      <Avatar
        source={{
          uri: user.avatar
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  );
};

Group.defaultProps = {
  title: 'Untitled',
  items: []
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

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  margin: 0 25px;
  border-bottom-width: 1px;
  border-bottom-color: #F3F3F3;
`;

export default Group;