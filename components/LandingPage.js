import { MainPage, SubHeading, Heading } from '../styles/LandingPageStyle';
import Typewriter from 'typewriter-effect';

export default function LandingPage() {
  return (
    <MainPage>
      <Heading>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString('Daniel Weds Hannah ')

                .start();
            }}
          />
        </h1>
      </Heading>

      <SubHeading>
        <h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString(' <b>August 25, 2025</b> at Fort Leburg City Hall')

                .start();
            }}
          />
        </h2>
      </SubHeading>
      <button>CLICK HERE TO GET TO THE LOCATION</button>
    </MainPage>
  );
}
