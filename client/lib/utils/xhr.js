/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

// callback 방식

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  //xhr 사용하기 위한 생성자 함수

  // const {
  //   method = 'GET',
  //   url = '',
  //   onSuccess = null,
  //   onFail = null,
  //   body = null,
  //   headers = {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // } = options;

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  //헤더를 명시해주어야 한다. 없으면 text => 서버에서 처리 불가능
  // xhr.setRequestHeader('Content-Type', 'application/json');

  //상태가 변경되면 실행되는 이벤트
  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    //요청상태 확인
    if (status >= 200 && status < 400) {
      //status가 완료되었을 때
      if (readyState === 4) {
        //data 불러오기 (string)
        //JSON.parse 사용하여서 데이터를 가공해주어야 함.
        onSuccess(JSON.parse(response));
      }
    } else {
      onFail('실패');
    }
  });

  //
  xhr.send(JSON.stringify(body));
}

//필요한 인수들
//method, url, onSuccess, onFail, body, headers

// xhr({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result) {
//     console.log(result);
//   },
//   onFail(err) {
//     console.log(err);
//   },
//   body: {
//     name: 'tiger',
//   },
// });

// 1. 자바스크립드의 함수는 객체다.
// 2. 사용자(협엽개발자) 입장 : 쉽게쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 널어버리자

/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {Function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {Function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 */

xhr.get = (url, onSuccess, onFail) => {
  //xhr에 전달 해주자
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {Object} body 생성할 데이터 객체
 * @param {Function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {Function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @returns serverData
 */

xhr.post = (url, body, onSuccess, onFail) => {
  //xhr에 전달 해주자
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {Object} body 바꿔줄 내용 데이터 객체
 * @param {Function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {Function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @returns serverData
 */

xhr.put = (url, body, onSuccess, onFail) => {
  //xhr에 전달 해주자
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {Function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {Function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @returns serverData
 */

xhr.delete = (url, onSuccess, onFail) => {
  //xhr에 전달 해주자
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

