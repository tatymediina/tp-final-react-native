import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Photo Notes',
          }}
        />
        <Stack.Screen
          name="create"
          options={{
            title: 'New Note',
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="note/[id]"
          options={{
            title: 'Note Details',
          }}
        />
        <Stack.Screen
          name="edit/[id]"
          options={{
            title: 'Edit Note',
            presentation: 'modal',
          }}
        />
      </Stack>
    </>
  );
}
