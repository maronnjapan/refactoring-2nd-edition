const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10" },
    { temp: 53, time: "2016-11-11" },
    { temp: 58, time: "2016-11-12" },
    { temp: 53, time: "2016-11-13" },
    { temp: 51, time: "2016-11-14" },
  ],
};
const readingsOutsideRange = (station, min, max) =>
  station.readings.filter((r) => r.temp < min || r.temp > max);

const alerts = readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
); //呼び出し側
