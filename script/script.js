// 1. Задача: "Удвоение зарплаты" У вас есть массив объектов, представляющих сотрудников 
// с полями "имя" и "зарплата". Используя метод map, удвойте зарплату каждого сотрудника.
const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
  ];
  
const emplWithNewSalary = employees.map(e =>( {
    name: e.name, 
    salary: e.salary * 2 //создала новые объекты в новом массиве
}));
// const emplWithNewSalary1 = employees.map(e => {
//     e.salary *=2;   оставила ссылки на старые объекты в новом массиве
//     return e;
// });

console.log("1. Doubling salary:");
// console.log(emplWithNewSalary1);
emplWithNewSalary.forEach(e => console.log(`${e.name} - ${e.salary}`));

// 2. Задача: "Фильтрация сотрудников" Используя метод filter, отфильтруйте сотрудников, 
// у которых зарплата выше 5500.
const employees_1 = employees.filter(e => e.salary > 5500);
console.log("2. Employee filtering:");
employees_1.forEach(e => console.log(`${e.name} - ${e.salary}`));

// 3. Задача: "Общая зарплата" Используя метод reduce, вычислите общую зарплату 
// всех сотрудников.
const totalSalary = employees.reduce((acc, e) => acc + e.salary, 0);
console.log(`3. Total salary is ${totalSalary}.`);

// 4. Задача: "Имена в верхнем регистре" Используя метод map, преобразуйте имена всех 
// сотрудников к верхнему регистру.
const employees_2 = employees.map(e =>({
    name: e.name.toUpperCase(), //если не ставить розовые скобки, JS не поймет, что надо вернуть объект, будет выполнять тело ф-ии в {}
    salary: e.salary
}));
console.log("4. Uppercase names:");
employees_2.forEach(e => console.log(`${e.name} - ${e.salary}`));