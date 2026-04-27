import { useEffect, useState } from 'react';
import { differenceInMinutes, isFuture } from 'date-fns';

export const useJudicialNotifications = (events) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const checkAlerts = () => {
      const now = new Date();
      const upcomingAlerts = [];

      events.forEach((event) => {
        const start = new Date(event.inicio);
        if (isFuture(start)) {
          const diff = differenceInMinutes(start, now);
          
          if (diff <= 30 && diff > 0) {
            upcomingAlerts.push({
              id: event.id,
              type: diff <= 10 ? 'urgent' : 'warning',
              message: `El juicio "${event.titulo}" (Exp: ${event.expediente}) comenzará en ${diff} minutos en la ${event.sala}.`,
              event
            });
          }
        }
      });

      setAlerts(upcomingAlerts);
    };

    checkAlerts();
    const interval = setInterval(checkAlerts, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [events]);

  return alerts;
};
