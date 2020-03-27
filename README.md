Homework week 5

The task was to create a daily calender to help a busy worker structure out his day. the requirements were :
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

This task achieved through the use of html, css and javascript. 
I used the HTML with CSS to structure the planner into a table using bootstrap. The time aspect was done using moment, and javascript was used to changed the colour of the containers depending on the time. The text input in the middle column was updated to the local storage when the button on the right was pressed and when the page first loads, any information in the local storage can be displayed. 