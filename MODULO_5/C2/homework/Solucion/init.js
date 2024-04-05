import { Chance } from "chance";
import moment from "moment";

const chance = new Chance();
const name = chance.name();
const birthdate = moment(chance.birthday());
const actualDate = moment();
const tomorrowDate = moment().add(1, "days").format("LL");
const minutesSinceBirth = actualDate.diff(birthdate, "minutes", true);
const hoursSinceBirth = actualDate.diff(birthdate, "hours", true);
const dayMinutesLeft = -actualDate.diff(tomorrowDate, "minutes", true);
const dayHoursLeft = -actualDate.diff(tomorrowDate, "hours", true);
console.log(
    `Welcome ${name} ! How's your day going? We hope very good, its been ${minutesSinceBirth} minutes since your birth which stands ${hoursSinceBirth} hours, thats a very short time, however you managed to build a lot of great things. Amazing, congratulations!. Now, today you still have ${dayMinutesLeft} minutes which means ${dayHoursLeft} hours to continue creating amazing stuff, how would you like to continue?`
);
