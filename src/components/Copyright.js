import React from 'react';

function showCopyright() {
    let currentDateTime = new Date();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[currentDateTime.getMonth()];
    let currentDate = currentDateTime.getDate();
    let currentYear = currentDateTime.getFullYear();
    let dateToday = currentMonth + " " + currentDate + ", " + currentYear;
    let copyrightDate = '\u00A9' + dateToday;
    return copyrightDate;
}

export default showCopyright;