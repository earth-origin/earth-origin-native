import { LocalDate } from "js-joda";

export function moonPhases() {
    const date = new Date();
    const getJulianDate = (date = new Date()) => {
        const time = date.getTime();
        const tzoffset = date.getTimezoneOffset()

        return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
    }

    const LUNAR_MONTH = 29.530588853;const getLunarAge = (date = new Date()) => {
        const percent = getLunarAgePercent(date);
        const age = percent * LUNAR_MONTH;  return age;
    }

    const getLunarAgePercent = (date = new Date()) => {
        return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
    }

    const normalize = value => {
        value = value - Math.floor(value);
        if (value < 0)
            value = value + 1;
        return value;
    }

    const age = getLunarAge(date);
    if (age < 1.84566)
        return {
            name: "New Moon",
            image: require('./newMoon.png')
        };
    else if (age < 5.53699)
        return {
            name: "Waxing Crescent",
            image: require('./fullMoon.png')
        };
    else if (age < 9.22831)
        return {
            name: "First Quarter",
            image: require('./fullMoon.png')
        };
    else if (age < 12.91963)
        return {
            name: "Waxing Gibbous",
            image: require('./fullMoon.png')
        };
    else if (age < 16.61096)
        return {
            name: "Full Moon",
            image: require('./fullMoon.png')
        };
    else if (age < 20.30228)
        return {
            name: "Waning Gibbous",
            image: require('./fullMoon.png')
        };
    else if (age < 23.99361)
        return {
            name: "Last Quarter",
            image: require('./fullMoon.png')
        };
    else if (age < 27.68493)
        return {
            name: "Waning Crescent",
            image: require('./fullMoon.png')
        };
}