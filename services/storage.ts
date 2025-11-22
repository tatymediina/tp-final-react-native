import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Note {
  id: string;
  title: string;
  description: string;
  imageUri: string;
  date: string;
}

const STORAGE_KEY = '@photo_notes_data';

export const saveNote = async (note: Note): Promise<void> => {
  try {
    const existingNotes = await getNotes();
    const newNotes = [note, ...existingNotes];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
  } catch (e) {
    console.error('Error saving note:', e);
    throw e;
  }
};

export const getNotes = async (): Promise<Note[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading notes:', e);
    return [];
  }
};

export const getNote = async (id: string): Promise<Note | undefined> => {
  try {
    const notes = await getNotes();
    return notes.find((n) => n.id === id);
  } catch (e) {
    console.error('Error getting note:', e);
    return undefined;
  }
};

export const updateNote = async (updatedNote: Note): Promise<void> => {
  try {
    const notes = await getNotes();
    const newNotes = notes.map((n) => (n.id === updatedNote.id ? updatedNote : n));
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
  } catch (e) {
    console.error('Error updating note:', e);
    throw e;
  }
};

export const deleteNote = async (id: string): Promise<void> => {
  try {
    const notes = await getNotes();
    const newNotes = notes.filter((n) => n.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
  } catch (e) {
    console.error('Error deleting note:', e);
    throw e;
  }
};
