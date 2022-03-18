import React from 'react';
import {
  Container,
  BannerItem,
  Title,
  RateContainer,
  Rate
} from './styles';
import { Ionicons } from '@expo/vector-icons';

function SliderItem() {
  return (
    <Container activeOpacity={0.7}>
      <BannerItem
        source={{ uri: 'https://www.istockphoto.com/br/foto/o-violino-cl%C3%A1ssico-colocar-na-placa-de-madeira-entre-flores-secas-em-tom-vintage-e-gm958784558-261805575?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffilme&utm_term=filme%3A%3A%3A' }}
      />

      <Title numberOfLines={1}>Vingadores</Title>

      <RateContainer>
        <Ionicons name='md-star' size={12} color="#E7A74e" />
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  )
}

export default SliderItem;