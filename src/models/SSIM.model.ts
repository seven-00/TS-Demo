export interface FlightRecord {
  flightDesignator: string;
  itineraryVariationID: string;
  legSequenceNumber: string;
  serviceType: string;
  periodOfOperation: string;
  daysOfOperation: string;
  departureStation: string;
  scheduledDepartureTime: string;
  departureUTCOffset: string;
  arrivalStation: string;
  scheduledArrivalTime: string;
  arrivalUTCOffset: string;
  aircraftType: string;
  onwardFlights?: string[];
  restrictions?: string[];
}
