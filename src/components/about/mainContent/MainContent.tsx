import { pages } from '../../../utils/constants/pages';
import {
  Container,
  HookContainer,
  HookHeader,
  HookLink,
  More,
} from './MainContent.styled';

export default function MainContent() {
  return (
    <Container>
      <HookContainer>
        <HookLink to={pages.useFetch}>
          <HookHeader>useFetch</HookHeader>
          <div>
            Fetch data from a specified URL and handle loading, succcess and
            error states with useFetch.
          </div>
          <More>More</More>
        </HookLink>
      </HookContainer>
      <HookContainer>
        <HookLink to={pages.useLocalStorage}>
          <HookHeader>useLocalStorage</HookHeader>
          <div>
            Store and synchronize data from the browser's localStorage with
            useLocalStorage.
          </div>
          <More>More</More>
        </HookLink>
      </HookContainer>
      <HookContainer>
        <HookLink to={pages.useOutsideClick}>
          <HookHeader>useOutsideClick</HookHeader>
          <div>Handle the clicks outside the element with useOutsideClick.</div>
          <More>More</More>
        </HookLink>
      </HookContainer>
      <HookContainer>
        <HookLink to={pages.usePagination}>
          <HookHeader>usePagination</HookHeader>
          <div>Break big data into the pages with usePagination.</div>
          <More>More</More>
        </HookLink>
      </HookContainer>
      <HookContainer>
        <HookLink to="">
          <HookHeader>usePreferredLanguage</HookHeader>
          <div>
            Adapt to user language preferences dynamically with
            usePreferredLanguage.
          </div>
          <More>More</More>
        </HookLink>
      </HookContainer>
      <HookContainer>
        <HookLink to={pages.useToggle}>
          <HookHeader>useToggle</HookHeader>
          <div>Toggle the boolean value with useToggle.</div>
          <More>More</More>
        </HookLink>
      </HookContainer>
    </Container>
  );
}
