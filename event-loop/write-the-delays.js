// http://latentflip.com/loupe/
// https://javascript.info/settimeout-setinterval
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout


const exercises = [];

function writeTheDelays1() {
  let x = '';

  setTimeout(function sto_1() {
    x += 'script'; console.log(x);
  }, 2000);

  setTimeout(function sto_2() {
    x = ''; console.log(x);
  }, 500);

  x += 'java'; console.log(x);

  setTimeout(function sto_3() {
    x += 'java'; console.log(x);
  }, 1000);

  setTimeout(function sto_4() {
    console.assert(x === 'javascript', 'x should be "javascript"');
  }, 3000);
}
exercises.push(writeTheDelays1);




function writeTheDelays2() {
  let x = 'JavaScript';
  console.log(x);

  setTimeout(function sto_1() {
    console.assert(x === 'Java Script', 'x should be "Java Script"');
  }, 400);

  setTimeout(function sto_2() {
    x = x.slice(1, x.length);
    console.log(x);
  }, 300);

  setTimeout(function sto_3() {
    x = [].map.call(x, char => char.charCodeAt() < 97 ? ' ' + char : char);// what does this function exactly do??
    console.log(x.toString());
  }, 100);

  setTimeout(function sto_4() {
    x = x.join('');
    console.log(x);
  }, 200);
}
exercises.push(writeTheDelays2);


function writeTheDelays3() {
  let x = ["b", "c"];

  setTimeout(function sto_1() {
    x = x.reduce((acc, entry) => acc + entry, '');//add all and give as a string
    console.log(typeof x, x.toString());
  }, 500);

  setTimeout(function sto_2() {
    console.assert(x.toString() === 'a,b,c', 'x.toString() should be string a,b,c');//x = "a,b,c"
  }, 300);

  setTimeout(function sto_3() {
    x = ["a", ...x, "d"];
    console.log(typeof x, x.toString());//"a","b","c","d"
  }, 100);

  setTimeout(function sto_4() {
    x.pop();
    console.log(typeof x, x.toString());// take the last item 
  }, 200);

  setTimeout(function sto_5() {
    x.pop();
    console.log(typeof x, x.toString());// take the last item
  }, 400);

  setTimeout(function sto_6() {
    console.assert(x.toString() === 'ab', 'x.toString() should be ab');// x = "ab"
  }, 600);
}
exercises.push(writeTheDelays3);




const loupedExercises = exercises.map(louping);
const liveStudiedExercises = liveStudy(loupedExercises, 'Write The Delays');
document.body.appendChild(liveStudiedExercises.container);

