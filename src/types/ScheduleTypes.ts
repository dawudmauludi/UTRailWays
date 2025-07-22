export type Schedule = {
  id: number;
  trainId: number;
  departureStationId: number;
  arrivalStationId: number;
  departureTime: string;
  arrivalTime: string;
  trainName?: string;
  departureStation?: string;
  arrivalStation?: string;
};


