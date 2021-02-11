# Next.js로 깃허브 레퍼지토리 만들어보기

## 완성된 모습

![깃허브 레퍼지토리](https://user-images.githubusercontent.com/29043491/107621097-1438e080-6c99-11eb-8e8a-51b4e2f476bb.png)

## 사용 기술

> Next.js  
> css: styled-jsx(기본제공)  
> 아이콘: react-icons  
> 폰트 : 구글 폰트
> api: 깃허브

## 정리

### create-next-app 사용하기

```
npx create-next-app
```

해당 명령어를 터미널에 입력하면 통해서 기본 환경이 갖춰진 넥스트 앱이 만들어진다.

```js
// pages/users/[name].jsx
//해당 폴더는 파일기반으로 자동으로 라우팅 설정이 됨

//동적 라우팅을 하는 방법
import Link from "next/link";

<Link href=`/users/${name}`>
    <a>Move to {name}</a>
</Link>
```

위와 같이 라우팅을 할 때는 Link안에 a태그도 써줘야하고 동적 라우팅을 통해 [name].jsx라고 만든 페이지 등에 보낼 수 있음.

#### 정적파일

/public 폴더에 정적파일을 제공하고 src="/name.png" 등으로 사용하면 됨.  
이미지 파일, 폰트, manifest.json, robots.txt, favicon.ico, 로고 등을 여기에 넣고 사용하면 됨

#### 서버로부터 데이터 불러오는 api

1. getServerSideProps
   > 서버에서 데이터를 패치하여 초기 데이터를 전달함
2. getStaticProps
   > 빌드 시에 데이터를 불러와 결과를 json으로 저장하면 사용함

### 대표 특징

1. 자동 코드 분할
   > 자동으로 코드 분할을 하기 때문에 불필요한 코드가 로드되지 않게 됨
2. 파일 기반 라우팅 설정
   > pages 폴더에 생성되는 경로에 따라서 자동으로 라우팅 설정이됨
3. styled-jsx지원
   > 다른 모듈을 활용해도 되지만 기본적으로 컴포넌트 기반의 css 모듈을 제공한다.
