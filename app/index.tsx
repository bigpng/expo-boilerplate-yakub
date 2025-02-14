import { Stack, Link } from 'expo-router';
import { Text } from "react-native";
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
          <Text className="text-red-500 text-xl mt-4 text-right">
              Nativewind classes are working!
          </Text>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details?" />
        </Link>
      </Container>
    </>
  );
}
