import React, {ReactElement} from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../theme';

const Container = styled.View`
  flex: 1;
  background: ${colors.backgroundColorDark};
  align-items: center;
  padding-top: 200px;
`;

function Loading(): ReactElement {
  return (
    <Container>
      <ActivityIndicator color={colors.lightGray5} />
    </Container>
  );
}

export default Loading;
