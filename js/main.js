document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

    if (day === "Wednesday" || day === "Thursday" ) {
        alert("Studyyyy Dayyy")
    } else if (day === "Monday") {
        alert("BOORING DAAAAY")
    } else {
        alert("Weekeeend HURRA!")
    }


}

