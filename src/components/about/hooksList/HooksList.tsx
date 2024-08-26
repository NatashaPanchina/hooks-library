import { hooks } from '../../../utils/constants/hooks';
import {
  Container,
  HookContainer,
  HooksWrapper,
  SecondHooksWrapper,
} from './HooksList.styled';

export default function HooksList() {
  return (
    <Container>
      <HooksWrapper>
        {hooks.map((hook) => (
          <HookContainer to={hook.route} key={hook.name}>
            {hook.name}
          </HookContainer>
        ))}
      </HooksWrapper>
      <SecondHooksWrapper>
        {hooks.map((hook) => (
          <HookContainer to={hook.route} key={hook.name}>
            {hook.name}
          </HookContainer>
        ))}
      </SecondHooksWrapper>
    </Container>
  );
}
