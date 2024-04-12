function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('dob').classList.add('is-invalid');
        return;
    }
    
    document.getElementById('dob').classList.remove('is-invalid');

    var dob = new Date(dobInput);
    var now = new Date();

    var age = now.getFullYear() - dob.getFullYear();
    var monthDiff = now.getMonth() - dob.getMonth();
    var dayDiff = now.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12;
    }

    var years = age;
    var months = monthDiff;
    var days = dayDiff;

    document.getElementById('result').innerHTML = years + " years, " + months + " months, and " + days + " days.";
    document.getElementById('dob').value = '';
}
