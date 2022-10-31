---
title: 'React02'
date: '2022-10-31'
---

## react 기본 코드 이해하기

create-react-app으로 react 프로젝트를 생성하면, 기본 템플릿 코드가 만들어진다.

## App.js

```
import logo from './logo.svg'
import './App.css'
function App() {
	return (
		<div className="App"></div>
	)
}
export default App;
```

## 리액트를 사용 할 때 node.js가 필요한 이유

1장에서 react 프로젝트를 개발 할때 필요한 도구들이 node.js를 사용하기 때문이라고 했었다. app.js 코드를 살펴보면 import 라는 구문이 있는데, 특정 파일을 불러오는 것을 의미한다. 나는 import가 원래 있던 기능인 줄 알았는데, 원래 이런식으로 모듈을 불러와서 사용하는 것은 브라우저에서 없던 기능이고, 브라우저가 아닌 node.js에서 지원하는 기능이라고 한다. (참고로 node.js에서 모듈을 불러올 때는 자바스크립트와 달리 'require'라는 구문을 사용한다.) 여기서 리액트 프로젝트 개발을 할 떄 node.js가 필요한 이유가 나오는 것이다.<br><br>

node.js에서 사용하던 모듈을 불러오는 기능을 브라우저에서 사용하기 위해서는 번들러를 사용 한다. 번들은 파일을 묶듯이 **연결**한다는 것인데, 대표적인 번들러로는 webpack, parcel, browserify라는 도구들이 있고, 리액트에서는 주로 webpack을 사용한다. 번들러 도구를 사용하면 import로 불러운 모듈을 모두 합쳐서 하나의 파일을 생성 해 준다. <br><br>

2017년부터는 브라우저에서도 import를 사용 할 수 있게 되었지만, 단순히 파일을 불러오는 것이기 때문에 리액트 프로젝트에서 모듈을 불러와 번들링 하는 것 과는 다른 개념이다. webpack에는 로더라는 기능이 있어서, svg 파일과 css 파일도 불러올 수 있다. css-loader는 css파일을, file-loader 웹폰트나 미디어 파일을 불러온다. 그리고 **babel-loader**가 자바스크립트 파일들을 불러오고 **babel**이라는 도구를 사용하여 ES5문법으로 변환해준다. <br><br>

본래 위와 같은 webpack의 로더들은 직접 설치해야 하지만 creat-react-app을 할 때 알아서 다 세팅을 해준다고 한다. 🤩

## JSX란?

JSX를 알기 위해서는 리액트 컴포넌트를 원래 어떻게 만들어야 했는지 알아야 한다. 초기 리액트에서 컴포넌트를 만들기 위해서는 아래와 같이 사용해야 했다.

```
function App() {
	return React.createElement('div',null, 'Hello', React.createElement('b', null, 'react))
}
```

**React.createElement()**라는 함수를 이용해서 컴포넌트로 만들고 싶은 컨텐츠를 파라미터로 넣어주어야 한다. 이렇게 작업을 하게 된다면 코드가 복잡해질 뿐 아니라, 작업 소요 시간도 당연 길어 질 것이다. 이런 과정을 편하게 하고자 나온 것이 바로 JSX 문법이다. JSX는 자바스크립트 기반 문법으로, html과 javascript를 한번에 쓸 수가 있다. JSX로 작업된 컴포넌트는 바벨이 일반 자바스크립트 코드로 변환해주는데, 위 예시로 작성된 **React.createElement()**함수 코드로 변환해 주는 것이다.

## src/index.js - 컴포넌트 렌더링

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
```

1. id가 root인 html요소를 찾는다 (public/index.html에 있음)
2. 리액트 컴포넌트를 보여 줄 수 있는 루트 인스턴트를 createRoot함수를 사용 하여 생성한다.
3. root.render() 함수에 JSX 코드를 인자로 넣어서 보여주고 싶은 컴포넌트를 화면에 보여준다.
4. index.js는 루트 컴포넌트인 App.js를 호출해준다.

> React.StricMode는 개발환경에서만 활성화되는 디버깅용 컴포넌트로 리액트에서 앞으로 사라질 레거시 기능들을 사용 할때 경고를 해주고, 앞으로 미래의 리액트 버전에 도입될 기능들이 정상적으로 호환 될 수 있도록 유도 해준다. 이 기능이 켜져 있으면 콘솔창에서 테스트시 콘솔이 두번 뜨게 된다.
## JSX 문법

### jsx 확장자 .js? .jsx?

JSX를 사용하려면 보통 파일 확장자를 **JSX**로 저장한다. 사실 .js로 저장하던, .jsx로 저장하던 큰 차이는 없다고 한다. 왜냐하면 어차피 바벨에서 변환되어 빌드가 되기 때문에 확장자로 인해 기능적인 문제가 생기지 않기 때문이다. 기능적 차이가 별로 없다보니, 이에 대해 .jsx 확장자의 필요성을 논하기도 한단다.. 일반적인 의견으로는 jsx 자체가 표준 자바스크립트 문법이 아니라 확장 문법이므로 컨벤션 차원에서 구분하는 것이 보통 인 듯 하다.

### JSX 기본 구조

```
function App() {
	return (
		<div className="App">
			<h1>제목임당</h1>
		</div>
	)
}
export default App;
```

### JSX - HTML 쓰기

JSX의 기본 구조는 위 코드와 같이 function 안에 return 값으로 컴포넌트의 html 코드를 작성해준다. html의 구조는 무조건 부모 요소 하나로 감싸고 그 안에 원하는 코드들을 삽입 해 주어야 한다. <br><br>

#### ★★★ 요소를 하나로 감싸주어야 하는 이유 ★★★

> Virtual DOM에서 컴포넌트 변화를 감지 해 낼 때 효율적으로 비교 할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문!!
#### 의미없는 div가 싫다면 Fragment

보통 div 태그로 많이 감싸지만, 그렇게 작성했을때 개발자 도구창에서 렌더링 된 html 코드들이 div 지옥으로 되어 있을 것이다. 잘 알려져 있다 시피... 아무 의미 없는 태그를 쓰는건 좋지 못한 코드이다. 이런 의미없는 빈 태그를 쓰고 싶지 않다면 **Fragment**라는 것을 사용 하면 된다. Fragment는 DOM에 별도의 노드를 추가하지 않고 요소들을 그룹화 할 수가 있다. 따라서 의미 없는 빈 태그들이 남발 하지 않을 수 있다는 것이다. Fragment는 **<React.Fragment>**로 써도 되고, 축약형으로 아무것도 없는 빈 태그 **<>**로도 사용이 가능하다. 보통 빈 태그로 쓰는 것이 편리하기 때문에, 빈 태그를 주로 사용한다.

[참고:Fragment-reactjs](https://ko.reactjs.org/docs/fragments.html#short-syntax)

```
function App() {
	return (
		<> //or <React.Fragment>
			<h1>제목임당</h1>
		</React.Fragment>
	)
}
export default App;
```

#### 태그는 꼭 닫아주어야 한다.

JSX에서 html 코드를 쓸때 주의 해야 할 점은 반드시 태그를 닫아주어야 한다는 것이다. 보통 input, br, hr 태그들은 태그를 닫지 않아도 정상적으로 화면에 보여진다. 하지만 JSX에서의 html은 xml처럼 반드시 태그를 닫아주어야 한다. Input 태그처럼 태그 내부에 내용이 없는 경우에는 이렇게 '< Input />' self-closing으로 닫아주면 된다.

### JSX - 자바스크립트 쓰기

JSX 내부에서 자바스크립트 코드를 쓰려면 {}으로 감싸주고, 안에 자바스크립트 코드를 넣어주면 된다.

```
function App() {
	const test = '테스트'
	return (
		<> //or <React.Fragment>
			<h1>{test} 제목임당</h1>
		</React.Fragment>
	)
}
export default App;
```

#### jsx에서 조건문

##### If문은 사용 불가 - 삼항연산자

> jsx 내부에서는 if문을 사용 할 수 없다. if문을 꼭 사용 해야 한다면 jsx 밖에서 따로 사전에 값을 세팅해 주어야 한다. 하지만 간단한 조건문이라면 jsx 내부에서 삼항 연산자를 사용 할 수 있다.
##### And && 연산자

> 삼항연산자에서 true나 false 어느 한 값이 빈 값일 경우에는 and (&&) 연산자를 사용 할 수 있다. \*\* 주의 : 0은 Falsy지만 예외적으로 0을 그대로 보여준다
#### Undefined 렌더링 하지 않기

리액트 컴포넌트에서는 함수에서 **undefined만** 반환하는 상황은 만들면 안된다. 만약 undefined으로만 리턴된다면 undefined 일때 리턴 해줄 값을 따로 세팅 해주어야 한다. 이때 or(||) 연산자를 사용 하면 값이 Undefined일때 리턴 해줄 값을 세팅 해줄 수 있다.

#### 주석

> JSX에서 주석은 { /\* \*/ } 을 사용한다.
```
const test = undefined;
return test || '잘못 된 값 입니다.'
```

### JSX - CSS style

스타일을 적용 할때는 따로 css 파일을 만들어 연결 해주어도 되지만, 인라인으로 작성 할 수도 있다. 인라인으로 작성 할때는, 순수 자바스크립트에서 css style을 쓸때처럼 객체형태로 camelCase 문법에 맞춰 넣어주변 된다.

```
const style = {
	backgroundColor: blue;
}
function App() {
	return (
		<div style={style}><div>
	)
}
```

혹은 내부에 직접 넣어줄 수 도 있다.

```
function App() {
	return (
		<div style={{color:red}><div>
	)
}
```

#### class가 아닌 className

JSX에서는 html 태그에 class를 지정 해줄 때 class가 아닌 className으로 해주어야 한다. 기본적으로 JSX자체가 자바스크립트 문법 기반이기 때문에, 자바스크립트 문법처럼 className으로 사용 하는 듯 하다.

### Eslint와 Prettier

##### ESLint

ESLisnt는 코드를 작성 할때 정해진 규칙에 맞지 않게 작성된 코드에 대하여 에러 혹은 경고 메세지를 보내주는 기능이다.

##### Prettier

리액트 프로젝트마다 prettier 설정을 커스터마이징 할 수 있는데, .prettierc 파일에 원하는 설정값들을 세팅 해주면 된다.

[참고:JSX_reactjs.org](https://ko.reactjs.org/docs/introducing-jsx.html)