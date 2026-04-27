import { isBefore, isAfter, isEqual } from 'date-fns';

export const checkCollision = (newEvent, existingEvents) => {
  return existingEvents.some(event => {
    if (event.id === newEvent.id) return false; // Ignore self when editing
    if (event.garantiaId !== newEvent.garantiaId) return false;

    const start1 = new Date(newEvent.inicio);
    const end1 = new Date(newEvent.fin);
    const start2 = new Date(event.inicio);
    const end2 = new Date(event.fin);

    // Overlap condition: start1 < end2 && end1 > start2
    return (isBefore(start1, end2) || isEqual(start1, end2)) && (isAfter(end1, start2) || isEqual(end1, start2)) && !isEqual(start1, end2) && !isEqual(end1, start2);
  });
};

export const getEventStatus = (inicio, fin) => {
  const now = new Date();
  const startDate = new Date(inicio);
  const endDate = new Date(fin);

  if (isAfter(now, endDate)) return 'Finalizado';
  if (isAfter(now, startDate) || isEqual(now, startDate)) return 'En Curso';
  return 'Pendiente';
};

export const GARANTIAS = [
  { id: 'g1', name: 'Garantía 1' },
  { id: 'g2', name: 'Garantía 2' },
  { id: 'g3', name: 'Garantía 3' },
  { id: 'g4', name: 'Garantía 4' },
  { id: 'g5', name: 'Garantía 5' },
];
