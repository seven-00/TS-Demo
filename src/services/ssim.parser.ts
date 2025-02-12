import fs from "fs";
import readline from "readline";
import { FlightRecord } from "../models/ssim.model";

export const parseSSIMFile = async (filePath: string): Promise<FlightRecord[]> => {
  const records: FlightRecord[] = [];
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let currentFlight: FlightRecord | null = null;

  for await (const line of rl) {
    const recordType = line.substring(0, 1).trim();

    // Flight Leg Record (Type 3)
    if (recordType === "3") {
      if (currentFlight) records.push(currentFlight); // Save previous flight

      currentFlight = {
        flightDesignator: line.substring(2, 9).trim(),
        itineraryVariationID: line.substring(10, 12).trim(),
        legSequenceNumber: line.substring(12, 14).trim(),
        serviceType: line.substring(14, 15).trim(),
        periodOfOperation: line.substring(15, 29).trim(),
        daysOfOperation: line.substring(29, 36).trim(),
        departureStation: line.substring(37, 40).trim(),
        scheduledDepartureTime: line.substring(40, 44).trim(),
        departureUTCOffset: line.substring(48, 53).trim(),
        arrivalStation: line.substring(55, 58).trim(),
        scheduledArrivalTime: line.substring(58, 62).trim(),
        arrivalUTCOffset: line.substring(66, 71).trim(),
        aircraftType: line.substring(73, 76).trim(),
        onwardFlights: [],
        restrictions: [],
      };
    }

    // Onward Flight or Restrictions (Type 4)
    else if (recordType === "4" && currentFlight) {
      const onwardFlight = line.substring(138, 146).trim();
      const restriction = line.substring(150, 160).trim();

      if (onwardFlight) currentFlight.onwardFlights?.push(onwardFlight);
      if (restriction) currentFlight.restrictions?.push(restriction);
    }
  }

  if (currentFlight) records.push(currentFlight); // Save last record

  return records;
};
