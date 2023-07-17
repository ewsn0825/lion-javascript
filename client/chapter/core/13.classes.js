/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

//Animal => tiger => 호돌이

class Animal {
  //클래스 필드
  legs = 4;
  tail = true;
  stomach = [];

  //constructor 메서드는 필수적으로 들어가주어야함
  //최초 1회는 실행된다. (do-while 느낌)

  //생성자 함수

  constructor(name) {
    this.name = name;
  }

  //ex) tiger.eat = '늑대'
  set eat(food) {
    this.stomach.push(food);
  }

  //ex) tiger.eat;
  get eat() {
    return this.stomach;
  }
}

//animail을 확장시켜서 tiger을 만들어준다.
class Tiger extends Animal {

  //인수로 받는 항목이 많아지게되면?

  //1. ...args(라스트 파라미터)
  //2. 객체로 넘김
  //3. 구조분해할당

  prey='';

  //프라이빗 => 밖에서 사용하는 사용자가 접근 불가능하게 해줌
  //#prey='';

  //extends 에서 컨스트럭트 생략가능
  constructor(name, pattern) {

    //내 부모의 프로퍼티를 가져온다.
    super(name);
    this.pattern = pattern;
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`;
  }

  //스태틱 메서드 => 생성자로 생성된 객체가 쓸 수 있는 능력이 아니라 클래스가 가지고 있는 능력이다.

  
  static sleep(name){
    console.log(name+'이 잠을잔다.');
  }
}

const beom = new Tiger('범','호랑이무늬');
const hoho = new Tiger('hoho','호피무늬');



// const tiger = new Animal('호돌이');


class Champion{

  q='';
  w='';

  d='';
  f='';

  constructor(options){
    this.q=options.qValue;
    this.w=options.wValue;
    this.d=options.dValue;
    this.f=options.fValue;
  }

  pressD(){
    console.log(this.d +'발동!');
  }
  pressㄹ(){
    console.log(this.f +'발동!');
  }
}

const yumi = new Champion({
  qValue:'사르르탄',
  wValue:'너랑유미랑',
  dValue:'점멸',
  fValue:'회복',
});