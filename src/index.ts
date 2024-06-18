import * as PublicHolidays from './services/public-holidays.service'


let colombianHolidays = [];
PublicHolidays.getListOfPublicHolidays(2024, 'CO').then((holidays) => {
   console.log(holidays) 
   colombianHolidays = holidays;
}).then(() => {
    return PublicHolidays.checkIfTodayIsPublicHoliday('CO')
}).then((todayIsPublicHoliday) => {
    console.log('Is today a public holiday in Colombia?', todayIsPublicHoliday);
})

let frenchHolidays = [];
PublicHolidays.getListOfPublicHolidays(2023, 'FR').then((holidays) => {
    console.log(holidays) 
    frenchHolidays = holidays;
 })

let venezuelanHolidays = [];
PublicHolidays.getListOfPublicHolidays(2025, 'VF').then((holidays) => {
    console.log(holidays) 
    venezuelanHolidays = holidays;
 }).catch((error) => {
    console.error(error)
 })