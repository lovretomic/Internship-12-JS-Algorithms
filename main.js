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
      height: height,
    };
    users.push(user);
  } while (!confirm("Zelis li zavrsiti s unosom?"));

  const averageHeight =
    users.reduce((accumulator, user) => accumulator + user.height, 0) /
    users.length;

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
  boja očiju, boja kose i visina. Ispisati imena osoba
  kojima se boja kose i očiju poklapa, a da su po visini
  veći od medijana visina. */

  const users = [];
  const heights = [];
  const n = +prompt("Koliko osoba želiš dodati?");
  for (let i = 0; i < n; i++) {
    let name = prompt(`Unesi ime ${i + 1}. osobe`);
    let surname = prompt(`Unesi prezime ${i + 1}. osobe`);
    let eyeColor = prompt(`Unesi boju očiju ${i + 1}. osobe`);
    let hairColor = prompt(`Unesi boju kose ${i + 1}. osobe`);
    let height = +prompt(`Unesi visinu ${i + 1}. osobe`);
    const user = {
      name: name,
      surname: surname,
      eyeColor: eyeColor,
      hairColor: hairColor,
      height: height
    }
    users.push(user);
    heights.push(height);
  }

  heights.sort();
  const median = n % 2 == 0 ? (heights[Math.floor(n/2) - 1] + heights[Math.floor(n/2)]) / 2 : heights[Math.floor(n/2)];
  console.log(median);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(users[i], users[j])
      if (i !== j &&
          users[i].hairColor === users[j].hairColor &&
          users[i].eyeColor === users[j].eyeColor &&
          users[i].height >= median && users[j].height >= median)
      {
        console.log(users[i], users[j]);
      }
    }
  }


}

class Fruit {
  constructor(name, color, ready) {
    this.name = name;
    this.color = color;
    this.ready = ready;
  }
}

function task3() {
  /* Od zadanog niza (definiran na dnu) kreirati
  novi niz sa svim voćem kojem su ime i boja isti */

  let fruits = [
    new Fruit('banana', 'yellow', false),
    new Fruit('apple', 'green', false),
    new Fruit('orange', 'orange', false),
    new Fruit('mango', 'yellow', false),
    new Fruit('avocado', 'green', false),
    new Fruit('strawberry', 'red', false),
    new Fruit('cherry', 'red', false),
    new Fruit('tangerine', 'orange', false),
    new Fruit('blueberry', 'blue', false)
  ];
  
  const filteredFruits = fruits.filter((fruit) => {
    if (fruit.name === fruit.color) return fruit;
  });

  console.log(filteredFruits);
}
