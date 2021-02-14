import {FlatList, Keyboard} from 'react-native';
import React, {ReactElement, useEffect, useState} from 'react';

import {Pressable} from 'react-native';
import {colors} from '../../theme';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgLogo, SvgMenu} from '../../utils/Icons';
import {Text} from 'react-native-svg';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundColorDark};
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
  justify-content: center;
  align-items: center;
`;


const FlatListHeader = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const FlatListHeaderButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const FlatLIstHeaderAddButtonText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.primary};
  margin-left: 5px;
`;

const EmptyElement = styled.View`
  flex: 1;
  padding-top: 100px;
  align-items: center;
`;

const EmptyText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: ${colors.light};
`;

function Main(): ReactElement {
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
          <FlatLIstHeaderAddButtonText>asdad</FlatLIstHeaderAddButtonText>
        </HeaderLogoWrapper>
        <UserButton onPress={pressMenuButton}>
          <SvgMenu fill={colors.light} />
        </UserButton>
      </Header>
    </Container>
  );
}

export default Main;
