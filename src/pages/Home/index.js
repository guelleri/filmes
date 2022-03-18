import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/header'
import { Feather } from '@expo/vector-icons';
import SliderItem from '../../components/SliderItem';
import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner,
  SliderMovie
} from './styles';


function Home() {
  return (
    <Container>
      <Header title="React Prime" />

      <SearchContainer>
        <Input placeHolder="Ex: Vingadores"
          placeHolderTextColor="#ddd" />
        <SearchButton>
          <Feather name='search' size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em Cartaz</Title>

        <BannerButton activeOpacity={0.9} onPress={() => alert('TESTE')}>
          <Banner
            resizeMethod="resize"
            source={{ uri: 'https://www.istockphoto.com/br/foto/o-violino-cl%C3%A1ssico-colocar-na-placa-de-madeira-entre-flores-secas-em-tom-vintage-e-gm958784558-261805575?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffilme&utm_term=filme%3A%3A%3A' }}
          />
        </BannerButton>
        <SliderMovie
          horizontal={true}
          showsHorinzontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Populares</Title>

        <SliderMovie
          horizontal={true}
          showsHorinzontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Mais Votados</Title>

        <SliderMovie
          horizontal={true}
          showsHorinzontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />
      </ScrollView>
    </Container>
  )
}

export default Home;