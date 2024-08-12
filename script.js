  // Hamburger menu function
 const hamburger=document.getElementById('hamburger');
    const mobileMenu=document.getElementById('mobile-menu');
    
hamburger.addEventListener('click',function(){
    mobileMenu.classList.toggle('active')
});
document.addEventListener('DOMContentLoaded',function(){
    const hamburger=document.getElementById('hamburger');
    const mobileMenu=document.getElementById('mobile-menu');
    
hamburger.addEventListener('click',function(){
    mobileMenu.classList.toggle('active')
});
const form = document.getElementById('enq');
const popup = document.getElementById('popup');
const okBtn = document.getElementById('ok');
let formSubmit=false;
popup.style.display = 'none';
form.addEventListener('submit', function (event) {
   // Prevent the default form submission
    event.preventDefault(); 
    
    popup.style.display = 'block';
    // Get the form and its elements
    const form = document.getElementById('enq');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('mail');
    const phoneInput = document.getElementById('phone');
    
    // Add an event listener to the form's submit event
    form.addEventListener('submit', (e) => {
      // Prevent the form from submitting by default
      e.preventDefault();
    
      // Validate the name input
      if (!validateName(nameInput.value)) {
        alert('Name should contain only alphabets');
        return;
      }
    
      // Validate the email input
      if (!validateEmail(emailInput.value)) {
        alert('Email should be in a proper format (e.g. example@example.com)');
        return;
      }
    
      // Validate the phone input
      if (!validatePhone(phoneInput.value)) {
        alert('Phone number should contain only numbers');
        return;
      }
    
      // If all inputs are valid, submit the form
      form.submit();
    });
    
    // Function to validate the name input
    function validateName(name) {
      const nameRegex = /^[a-zA-Z ]+$/;
      return nameRegex.test(name);
    }
    
    // Function to validate the email input
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
    
    // Function to validate the phone input
    function validatePhone(phone) {
      const phoneRegex = /^\d+$/;
      return phoneRegex.test(phone);
    }
});
//Form submission popup
okBtn.addEventListener('click', function () {
    popup.style.display = 'none';
});
//how popup works when clicked on submit or on window
window.addEventListener('click', function (event) {
    if (event.target == form || event.target == okBtn || !popup.contains(event.target)) {
        popup.style.display = 'none';
    }
});


});
//Function for displaying the course details
document.getElementById('course').addEventListener('change', function() {
    // Hide all tables
    document.querySelectorAll('.crstable').forEach(function(table) {
        table.style.display = 'none';
    });

    // Show the selected table
    const selectedTable = document.getElementById(this.value);
    if (selectedTable) {
        selectedTable.style.display = 'block';
    }
});
// Script to handle course and semester selection and display the corresponding timetable
document.addEventListener('DOMContentLoaded', function() {
    const courseSelect = document.getElementById('course-select');
    const semesterSelect = document.getElementById('semester-select');

    function displayTimetable(course, semester) {
        // Hide all tables
        const allTables = document.querySelectorAll('.timetable');
        allTables.forEach(table => table.style.display = 'none');

        // Construct the ID of the table to show
        const tableId = `${course}-${semester}`;
        const selectedTable = document.getElementById(tableId);

        // Show the selected table if it exists
        if (selectedTable) {
            selectedTable.style.display = 'table';
        }
    }
//Examination details selected based on course and semesters
    courseSelect.addEventListener('change', function() {
        const course = courseSelect.value;
        const semester = semesterSelect.value;
        if (course && semester) {
            displayTimetable(course, semester);
        }
    });

    semesterSelect.addEventListener('change', function() {
        const course = courseSelect.value;
        const semester = semesterSelect.value;
        if (course && semester) {
            displayTimetable(course, semester);
        }
    });
});
