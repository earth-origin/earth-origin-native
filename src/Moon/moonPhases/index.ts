export function moonPhases() {
  const date = new Date();
  const lunarCycleLength = 29.530588853;

  function getJulianDate(date = new Date()) {
    const time = date.getTime();
    const timeZoneOffset = date.getTimezoneOffset();

    return time / 86400000 - timeZoneOffset / 1440 + 2440587.5;
  }
  function getLunarAge(date = new Date()) {
    const percent = getLunarAgePercent(date);
    return percent * lunarCycleLength;
  }

  function getLunarAgePercent(date = new Date()) {
    return normalize((getJulianDate(date) - 2451550.1) / lunarCycleLength);
  }

  function normalize(value: number) {
    value = value - Math.floor(value);
    if (value < 0) {
      value = value + 1;
    }
    return value;
  }

  const age = getLunarAge(date);
  if (age < 1.84566) {
    return {
      name: "New Moon",
      image: require('./newMoon.png'),
    };
  } else if (age < 5.53699) {
    return {
      name: "Waxing Crescent",
      image: require('./waxingCrescent.png'),
    };
  } else if (age < 9.22831) {
    return {
      name: "First Quarter",
      image: require('./firstQuarter.png'),
    };
  } else if (age < 12.91963) {
    return {
      name: "Waxing Gibbous",
      image: require('./waningGibbous.png'),
    };
  } else if (age < 16.61096) {
    return {
      name: "Full Moon",
      image: require('./fullMoon.png'),
    };
  } else if (age < 20.30228) {
    return {
      name: "Waning Gibbous",
      image: require('./waningGibbous.png'),
    };
  } else if (age < 23.99361) {
    return {
      name: "Last Quarter",
      image: require('./lastQuarter.png'),
    };
  } else if (age < 27.68493) {
    return {
      name: "Waning Crescent",
      image: require('./waningCrescent.png'),
    };
  } else {
    return {
      name: "Unknown",
      image: require('./unknown.png'),
    };
  }
}
