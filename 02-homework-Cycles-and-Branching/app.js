//Ростислав Доскочинський 
//rostik frontend 4 years viddaleno pratsue.
// Mae knowledge from frontend.
let n = parseInt( prompt( 'Введіть число N' ) );

if( !isFinite(n) ){
  do{
    n = prompt( 'Введіть число N. Число, а не рядок!' );
    n = parseInt(n);
  }while( !isFinite(n) );
}

let m = parseInt( prompt( 'Введіть число M' ) );

if(!isFinite(m)){
  do{
    m = prompt( 'Введіть число M. Число, а не рядок!' );
    m = parseInt(m);
  }while( !isFinite(m) );
}

const boolean = confirm( 'Пропускати нам парні числа?' );

console.log(n, m);

let result = m;
for(let i = 0; i < (m - n); i++){
  result = result + m + 1;
}
console.log(result);