const calendar = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",  "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
    const date = new Date();
    const dayName = date.getDay();
    const dayDate = date.getDate(); 
    const month = new Date(date.getFullYear(), date.getMonth()+ 1, 0);
    const lastDayMonth = month.getDate() + 1;


    const calendar = document.createElement("div");
    calendar.className = "calendar";

        const dayOne = document.createElement("div");
        dayOne.id = "day-one"
        dayOne.className = "days";
            const dayOneName = document.createElement("div");
            dayOneName.className = "day-names";
            dayOneName.textContent = days[dayName];

            const dayOneDate = document.createElement("div");
            dayOneDate.className = "day-dates";
            dayOneDate.textContent = dayDate;

        const dayTwo = document.createElement("div");
        dayTwo.className = "days";
            const dayTwoName = document.createElement("div");
            dayTwoName.className = "day-names";
            dayTwoName.textContent = days[dayName + 1];

            const dayTwoDate = document.createElement("div");
            dayTwoDate.className = "day-dates";
            if (dayDate + 1 == lastDayMonth) {
                dayTwoDate.textContent = 0 + 1;
            } else if (dayDate + 1 > lastDayMonth) {
                dayTwoDate.textContent = Number(dayOneDate.textContent) + 1;
            } else {
                dayTwoDate.textContent = dayDate + 1;
            }

        const dayThree = document.createElement("div");
        dayThree.className = "days";
            const dayThreeName = document.createElement("div");
            dayThreeName.className = "day-names";
            dayThreeName.textContent = days[dayName + 2];

            const dayThreeDate = document.createElement("div");
            dayThreeDate.className = "day-dates";
            if (dayDate + 2 == lastDayMonth) {
                dayThreeDate.textContent = 0 + 1;
            } else if (dayDate + 2 > lastDayMonth) {
                dayThreeDate.textContent = Number(dayTwoDate.textContent) + 2;
            } else {
                dayThreeDate.textContent = dayDate + 2;
            }
        
        const dayFour = document.createElement("div");
        dayFour.className = "days";
            const dayFourName = document.createElement("div");
            dayFourName.className = "day-names";
            dayFourName.textContent = days[dayName + 3];

            const dayFourDate = document.createElement("div");
            dayFourDate.className = "day-dates";
            if (dayDate + 3 == lastDayMonth) {
                dayFourDate.textContent = 0 + 1;
            } else if (dayDate + 3 > lastDayMonth) {
                dayFourDate.textContent = Number(dayThreeDate.textContent) + 1;
            } else {
                dayFourDate.textContent = dayDate + 3;
            }

        const dayFive = document.createElement("div");
        dayFive.className = "days";
            const dayFiveName = document.createElement("div");
            dayFiveName.className = "day-names";
            dayFiveName.textContent = days[dayName + 4];

            const dayFiveDate = document.createElement("div");
            dayFiveDate.className = "day-dates";
            if (dayDate + 4 == lastDayMonth) {
                dayFiveDate.textContent = 0 + 1;
            } else if (dayDate + 4 > lastDayMonth) {
                dayFiveDate.textContent = Number(dayFourDate.textContent) + 1;
            } else {
                dayFiveDate.textContent = dayDate + 4;
            }


        const daySix = document.createElement("div");
        daySix.className = "days";
            const daySixName = document.createElement("div");
            daySixName.className = "day-names";
            daySixName.textContent = days[dayName + 5];

            const daySixDate = document.createElement("div");
            daySixDate.className = "day-dates";
            if (dayDate + 5 == lastDayMonth) {
                daySixDate.textContent = 0 + 1;
            } else if (dayDate + 5 > lastDayMonth) {
                daySixDate.textContent = Number(dayFiveDate.textContent) + 1;
            } else {
                daySixDate.textContent = dayDate + 5;
            };
        
        const daySeven = document.createElement("div");
        daySeven.className = "days";
            const daySevenName = document.createElement("div");
            daySevenName.className = "day-names";
            daySevenName.textContent = days[dayName + 6];

            const daySevenDate = document.createElement("div");
            daySevenDate.className = "day-dates";
            if (dayDate + 6 == lastDayMonth) {
                daySevenDate.textContent = 0 + 1;
            } else if (dayDate + 6 > lastDayMonth) {
                daySevenDate.textContent = Number(daySixDate.textContent) + 1;
            } else {
                daySevenDate.textContent = dayDate + 6;
            };

    
    calendar.append(dayOne, dayTwo, dayThree, dayThree, dayFour, dayFive, daySix, daySeven);


    dayOne.append(dayOneName,dayOneDate);
    dayTwo.append(dayTwoName,dayTwoDate);
    dayThree.append(dayThreeName,dayThreeDate);
    dayFour.append(dayFourName,dayFourDate);
    dayFive.append(dayFiveName,dayFiveDate);
    daySix.append(daySixName,daySixDate);
    daySeven.append(daySevenName,daySevenDate);


    return calendar;
};

const loadCalendar = () => {
    const main = document.querySelector(".main");
    main.appendChild(calendar());
}

export default loadCalendar;