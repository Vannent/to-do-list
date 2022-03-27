const calendar = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",  "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
    const date = new Date();
    const dayName = date.getDay();
    const dayDate = date.getDate(); 


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
            dayOneDate.textContent = date.getDate();

        const dayTwo = document.createElement("div");
        dayTwo.className = "days";
            const dayTwoName = document.createElement("div");
            dayTwoName.className = "day-names";
            dayTwoName.textContent = days[dayName + 1];

            const dayTwoDate = document.createElement("div");
            dayTwoDate.className = "day-dates";
            dayTwoDate.textContent = dayDate + 1;

        const dayThree = document.createElement("div");
        dayThree.className = "days";
            const dayThreeName = document.createElement("div");
            dayThreeName.className = "day-names";
            dayThreeName.textContent = days[dayName + 2];

            const dayThreeDate = document.createElement("div");
            dayThreeDate.className = "day-dates";
            dayThreeDate.textContent = dayDate + 2;
        
        const dayFour = document.createElement("div");
        dayFour.className = "days";
            const dayFourName = document.createElement("div");
            dayFourName.className = "day-names";
            dayFourName.textContent = days[dayName + 3];

            const dayFourDate = document.createElement("div");
            dayFourDate.className = "day-dates";
            dayFourDate.textContent = dayDate + 3;

        const dayFive = document.createElement("div");
        dayFive.className = "days";
            const dayFiveName = document.createElement("div");
            dayFiveName.className = "day-names";
            dayFiveName.textContent = days[dayName + 4];

            const dayFiveDate = document.createElement("div");
            dayFiveDate.className = "day-dates";
            dayFiveDate.textContent = dayDate + 4;

        const daySix = document.createElement("div");
        daySix.className = "days";
            const daySixName = document.createElement("div");
            daySixName.className = "day-names";
            daySixName.textContent = days[dayName + 5];

            const daySixDate = document.createElement("div");
            daySixDate.className = "day-dates";
            daySixDate.textContent = dayDate + 5;
        
        const daySeven = document.createElement("div");
        daySeven.className = "days";
            const daySevenName = document.createElement("div");
            daySevenName.className = "day-names";
            daySevenName.textContent = days[dayName + 6];

            const daySevenDate = document.createElement("div");
            daySevenDate.className = "day-dates";
            daySevenDate.textContent = dayDate + 6;

    
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