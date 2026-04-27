import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAgendaStore = create(
  persist(
    (set, get) => ({
      events: [],
      addEvent: (event) => set((state) => ({ events: [...state.events, { ...event, id: crypto.randomUUID() }] })),
      updateEvent: (updatedEvent) => set((state) => ({
        events: state.events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)),
      })),
      deleteEvent: (id) => set((state) => ({
        events: state.events.filter((e) => e.id !== id),
      })),
    }),
    {
      name: 'agenda-juicios-storage',
    }
  )
);
