import React, {ReactElement, useEffect, useState} from 'react';

import {Animated, Keyboard, View, Text, ImageBackground} from 'react-native';
import {colors} from '../../theme';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ImageBack, SvgLogo, SvgMenu} from '../../utils/Icons';
import {ScrollView} from 'react-native-gesture-handler';
import Card from './Card';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.darkBackground};
`;

const Header = styled.View`
  width: 100%;
  padding: 20px 0;
`;

const UserButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const HeaderLogoWrapper = styled.View`
  justify-content: flex-start;
  flex-direction: row;
`;

const FlatLIstHeaderAddButtonText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${colors.darkGray2};
  margin-left: -24px;
`;

function Main(): ReactElement {
  /** Animation */
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const currentUser = null;

  const [shownModal, setShownModal] = useState<boolean>(false);

  useEffect(() => {
    console.log(currentUser);
  }, []);

  const pressMenuButton = (): void => {
    console.log(currentUser);

    goToOther('Auth');
  };

  const goToOther = (where: string, item?: Object): void => {
    if (navigation) {
      if (item) {
        navigation.navigate(where, item);
        return;
      }
      navigation.navigate(where);
    }
  };

  const pressCancel = (): void => {
    Keyboard.dismiss();
    setShownModal(false);
  };

  return (
    <Container style={{paddingTop: insets.top}}>
      <Header>
        <HeaderLogoWrapper>
          <SvgLogo width={100} height={20} />
          <FlatLIstHeaderAddButtonText>인터섹션</FlatLIstHeaderAddButtonText>
        </HeaderLogoWrapper>
        <UserButton onPress={pressMenuButton}>
          <SvgMenu fill={colors.light} />
        </UserButton>
      </Header>
      <ImageBackground
        source={ImageBack}
        style={{height: '100%', width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            alignItems: 'center',
            paddingHorizontal: 40,
          }}></View>

        <View
          style={{
            width: '100%',
            marginTop: 50,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: '#5facdb',
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 40,
          }}>
          <Text
            style={{
              fontSize: 24,
              color: '#FFF',
            }}>
            NYC
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#a2a2db',
              paddingHorizontal: 15,
            }}>
            - - - - - - - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: '#FFF',
            }}>
            ICN
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 40,
          }}>
          <Text
            style={{
              color: '#a2a2db',
            }}>
            New York
          </Text>
          <Text
            style={{
              color: '#a2a2db',
              paddingLeft: 162,
            }}>
            SEOUL
          </Text>
        </View>
        <Text
          style={{
            paddingHorizontal: 40,
            color: '#a2a2db',
          }}>
          20 June, 2021
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 50,
            marginTop: 60,
          }}></View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 5,
          }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </ImageBackground>
      <Card />
    </Container>
  );
}

export default Main;
