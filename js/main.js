document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

    if (day === "tuesday" || day === "thursday" ) {
        alert("Studyyyy Dayyy")
    } else if (day === "saturday" || day === "sunday") {
        alert("Weekeeend HURRA!")
    } else {
        alert("BORINGGG")
    }


}

