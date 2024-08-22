import { Container, HookContainer } from './HooksList.styled';

export default function HooksList() {
  const hooks = [
    'useFetch',
    'useLocalStorage',
    'useOutsideClick',
    'usePagination',
    'usePreferredLanguage',
    'useToggle',
  ];
  return (
    <Container>
      {hooks.map((hook) => (
        <HookContainer key={hook}>{hook}</HookContainer>
      ))}
    </Container>
  );
}
