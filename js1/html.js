// let dlina = Number(prompt('Введите длину от 1 до 10'));
// let shirina = Number(prompt('Введите ширину от 1 до 10'));
// if (dlina===""||shirina===""||dlina===0||shirina===0||dlina>10||shirina>10||isNaN(dlina)||isNaN(shirina))){
//     alert('не правилньно');
// }else if(dlina===shirina){
//     alert(`Площадь квадрата равна ${dlina*shirina}`);
// }else{
//     alert(`Площадь прямоугольника равна ${dlina*shirina}`);
// };



// let day = Number(prompt('Введите день недели от 1 до 31'));
// if(day<=10){
//    alert('Декада 1');
// }else if(day<=20){
//     alert('Декада 2');
//  }else if(day<=31){
//     alert('Декада 3');
//  }else if(day===0||isNaN(day)||day<0){
//     alert('ошибка')
//  };


// let familiy = prompt('Ведите фамилию');
// let my = prompt('Ведите имя');
// let otchestvo = prompt('Ведите отчество');
// let vozrast = prompt('Ведите ваш возраст');
// let pol = confirm('ваш пол мужской?')
// let pensiy = confirm('вы на пенсии?')
// if(pol===true){
//    pol = "Мужской"
// } else {
//     pol = "Женский" 
// }
// if(pensiy===true){
//     pensiy = "да"
//  } else {
//      pensiy = "нет" 
//  } 
//  alert (`
//     ваше ФИО ${my} ${familiy} ${otchestvo} 
//     ваш возраст ${vozrast} 
//     через 5 лет вам ${my}  
//     ваш пол: ${pol}  
//     вы на пенсии ${pensiy}
//     `)


let old = null;
let name = prompt('Введите ваше имя');
let lastName = prompt('Введите вашу фамилию');
let surname = prompt('Введите ваше отчество');
let howYear = Number(prompt('Введите ваш возраст в годах'));
let gender = confirm('Ваш пол мужской?');
gender ? gender = 'Мужской' : gender = 'Женский';
(gender === 'Мужской' && howYear >= 63) || (gender === 'Женский' && howYear >= 58) ? old = 'Да' :  old = 'Нет';



name === null || howYear < 0 || name === '' || lastName === null || lastName === '' || surname === null || surname === '' || howYear === 0 || isNaN(howYear) ?  alert ('Перепроврьте введенные данные.')
: alert (`
    ваше ФИО: ${lastName} ${name} ${surname}
    ваш возраст в годах: ${howYear}
    ваш возраст в днях: ${(howYear * 365) + (Math.floor(howYear / 4))}
    через 5 лет вам будет: ${howYear + 5}
    ваш пол: ${gender}
    вы на пенсии: ${old}
`)


