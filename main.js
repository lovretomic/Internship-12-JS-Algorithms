function task1() {
  /* Korisnik unosi redom ime, prezime i visinu.
  Nakon unosa korisnika se pita želi li završiti
  s unosom. Ako odgovori NE ponovno se traži unos.
  Ako odgovori DA izračunati prosječnu visinu i
  ispisat osobu (cijeli objekt) čija visina najviše
  odskače od prosječne. */

  const users = [];
  do {
    let name = prompt("Unesi ime");
    let surname = prompt("Unesi prezime");
    let height = +prompt("Unesi visinu");
    const user = {
      name: name,
      surname: surname,
      height: height
    }
    users.push(user);
  } while (!confirm("Zelis li zavrsiti s unosom?"));

  const averageHeight = users.reduce((accumulator, user) => accumulator + user.height, 0) / users.length;

  let maxDiff = 0;
  let solutionUser = {};
  for (const user of users) {
    let diff = Math.abs(user.height - averageHeight);
    if (diff > maxDiff) {
      solutionUser = user;
      maxDiff = diff;
    }
  }

  console.log(solutionUser);
}

function task2() {
  /* Korisnik unosi broj osoba koje želi dodati.
  Kreira niz osoba čiji su atributi - ime, prezime,
  boja očiju, boja kose i visina. Ispisati imena
  osoba kojima se boja kose i očiju poklapa, a da
  su po visini veći od medijana visina. */

  const numberOfUsers = +prompt("Unesi broj koliko osoba zelis dodati.");
  for (let i = 0; i < numberOfUsers; i++) {
    let name = prompt("Unesi ime");
    let surname = prompt("Unesi prezime");
    let eyeColour = prompt("Unesi boju ociju");
    let hairColout = prompt("Unesi boju kose");
    let height = +prompt("Unesi visinu");
  }
}