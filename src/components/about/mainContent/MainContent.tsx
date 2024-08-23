import { hooks } from '../../../utils/constants/hooks';
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
      {hooks.map((hook) => (
        <HookContainer key={hook.name}>
          <HookLink to={hook.route}>
            <HookHeader>{hook.name}</HookHeader>
            <div>{hook.desc}</div>
            <More>More</More>
          </HookLink>
        </HookContainer>
      ))}
    </Container>
  );
}
