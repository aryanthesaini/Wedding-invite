import {
  MainPage,
  Data,
  Img,
  DataHeading,
  DataSubheading,
  ImageDiv,
} from '../styles/SeconfPageStyles';

export default function LandingPage() {
  return (
    <MainPage>
      <Data>
        <DataHeading>
          <h1>Our Fairy Tale Begins</h1>
        </DataHeading>
        <DataSubheading>
          <h4>
            Hannah and Daniel met through mutual friends seven years ago. From
            that moment on, they knew they were meant to be together forever.
            After a two-year engagement, they finally decided to tie the knot
            this August.
          </h4>
        </DataSubheading>
      </Data>

      <ImageDiv>
        <Img> </Img>
      </ImageDiv>
    </MainPage>
  );
}
