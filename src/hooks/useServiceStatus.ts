import { useEffect, useState } from 'react';

interface Service {
  name: string;
  target: string;
}

export function useServiceStatus(services: Service[]) {
  const [statuses, setStatuses] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkStatus = async () => {
      const newStatuses: Record<string, boolean> = {};

      for (const service of services) {
        try {
          const response = await fetch(`/api/ping?target=${encodeURIComponent(service.target)}`);
          const data = await response.json();
          newStatuses[service.name] = data.status === 'ok';
        } catch {
          newStatuses[service.name] = false;
        }
      }

      setStatuses(newStatuses);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30_000);

    return () => clearInterval(interval);
  }, [services]);

  return statuses;
}
