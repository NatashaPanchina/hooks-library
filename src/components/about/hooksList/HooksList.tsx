import { hooks } from '../../../utils/constants/hooks';
import { Container, HookContainer } from './HooksList.styled';

export default function HooksList() {
  return (
    <Container>
      {hooks.map((hook) => (
        <HookContainer key={hook.name}>{hook.name}</HookContainer>
      ))}
    </Container>
  );
}
