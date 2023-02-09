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