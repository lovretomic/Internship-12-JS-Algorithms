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

  alert(`Ime: ${solutionUser.name} ${solutionUser.surname} | Visina: ${solutionUser.height}`);
}

function task2() {
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
  const filteredUsers = users.filter((user) => {
    if (user.hairColor === user.eyeColor && user.height > median) return user;
  })

  const filteredNames = [];
  filteredUsers.forEach((user) => filteredNames.push(`${user.name} ${user.surname}`));

  console.log(heights);
  console.log(median);
  console.log(filteredUsers);
  console.log(filteredNames);

  alert(`Traženi korisnici: ${filteredNames.join(', ')}`);
}

class Fruit {
  constructor(name, color, ready) {
    this.name = name;
    this.color = color;
    this.ready = ready;
  }
}

let fruits = [
  new Fruit('banana', 'yellow', false),
  new Fruit('apple', 'green', false),
  new Fruit('orange', 'orange', true),
  new Fruit('mango', 'yellow', true),
  new Fruit('avocado', 'green', true),
  new Fruit('strawberry', 'red', false),
  new Fruit('cherry', 'red', true),
  new Fruit('tangerine', 'orange', false),
  new Fruit('blueberry', 'blue', false)
];

function task3() {
  /* Od zadanog niza (definiran na dnu) kreirati
  novi niz sa svim voćem kojem su ime i boja isti */
  const filteredFruits = fruits.filter((fruit) => {
    if (fruit.name === fruit.color) return fruit;
  });

  let filteredFruitNames = [];
  filteredFruits.forEach((fruit) => {
    filteredFruitNames.push(fruit.name);
  })
  alert(`Voće kojemo su ime i boja isti: ${filteredFruitNames.join(', ')}`);
}

let fruits2 = [
  new Fruit('banana', ['yellow'], false),
  new Fruit('apple', ['green', 'red'], false),
  new Fruit('orange', ['orange'], true),
  new Fruit('mango', ['yellow', 'green'], true),
  new Fruit('avocado', ['green'], true),
  new Fruit('strawberry', ['red'], false),
  new Fruit('cherry', ['red'], true),
  new Fruit('tangerine', ['orange'], false),
  new Fruit('blueberry', ['blue', 'purple'], false)
];

function task4() {
  /* Iz liste voća s više boja pronađi sva voća s žutom bojom
  i promijeni ju u crvenu. Ispiši staro i novo voće */

  const yellowFruits = fruits2.map((fruit) => {
    let singleFruit = JSON.parse(JSON.stringify(fruit));
    if (singleFruit.color.includes('yellow')) {
      const index = singleFruit.color.indexOf('yellow');
      singleFruit.color.splice(index, 1);
      if (!singleFruit.color.includes('red')) singleFruit.color.push('red');
    }
    return singleFruit;
  });

  alert("Ispisujem staro voće...");
  fruits2.forEach((fruit) => {
    let colors = []
    fruit.color.forEach((c) => colors.push(c));
    alert(`Ime: ${fruit.name} (${colors.join(', ')})`);
  })

  alert("Ispisujem novo voće...");
  yellowFruits.forEach((fruit) => {
    let colors = []
    fruit.color.forEach((c) => colors.push(c));
    alert(`Ime: ${fruit.name} (${colors.join(', ')})`);
  })
}

function task5() {
  /* Filtrirat u novi array svo voće koje ima žutu boju */

  const yellowFruits = fruits2.filter((fruit) => {
    if (fruit.color.includes('yellow')) return fruit;
  });

  let yellowFruitNames = [];
  yellowFruits.forEach((fruit) => {
    yellowFruitNames.push(fruit.name);
  })

  alert(`Voće koje ima žutu boju: ${yellowFruitNames.join(', ')}`);
}

function task6() {
  /* Ispiši korisniku sadržaj košarice (lista voća). Ukoliko
  postoji neko voce koje nije spremno za prodaju unutar te košarice
  ispiši mu i listu indexa tih ne spremnih voća. Kreiraj novu košaricu
  bez tih voća i predloži mu kupnju s ispisom novog sadržaja košarice */

  let indexes = [];
  let readyFruits = [];
  fruits.forEach((fruit, i) => {
    if (!fruit.ready) indexes.push(i);
    else readyFruits.push(fruit);
  });

  let readyFruitNames = [];
  readyFruits.forEach((fruit) => {
    readyFruitNames.push(fruit.name);
  })

  alert(`Voće koje nije spremno: ${indexes.join(', ')}`);
  alert(`Novi sadržaj košarice: ${readyFruitNames.join(', ')}`);
}

function task7() {
  /* Sortiraj košaricu po imenu voća */

  fruits.sort((first, second) => first.name > second.name ? 1 : -1);
  let fruitNames = [];
  fruits.forEach((fruit) => fruitNames.push(fruit.name));
  alert(fruitNames.join(', '));
}

function task8() {
  /* Riješi problem Gaussove dosjetke koristeći petlje i JS ugrađene
  funkcije nad listama (zabranjeno korištenje formule). Sami napravite
  array s prvih 100 prirodnih brojeva (bonus points ako napravit bez petlje) */

  let generatedNums = [];
  function generateNums(begin, end) {
    generatedNums.push(begin);
    if (begin < end) generateNums(begin + 1, end);
  }
  generateNums(1, 100);
  
  let sum = 0;
  let pair = generatedNums[0] + generatedNums[generatedNums.length - 1];
  sum = Math.floor(generatedNums.length / 2) * pair;
  if (generatedNums.length % 2 !== 0) sum += generatedNums[Math.ceil(generatedNums.length / 2)];

  alert(sum);
}

function task9() {
  /* Traži unos podataka (string) u formatu riječi odvojenih s razmakom i
  ispiši ih u CSV formatu */

  alert(prompt("Unesi podatke odvojene razmakom.").split(' ').join(', '));
}