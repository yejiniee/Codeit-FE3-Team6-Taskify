# ✨프로젝트 소개

## 🚢 Deploy

https://taskify-coral-eta.vercel.app/

## ☀️ Project Topic

우리의 시간을 효율적으로 관리하기 위해, 다양한 일정 및 시간 관리 기능을 제공하는 일정관리 플랫폼 

## 👨‍💻 Members

**Codeit FE Sprint 3기 - 6팀**

|  Name  |                      Github                      |  Name  |                      Github                      |
| :----: | :----------------------------------------------: | :----: | :----------------------------------------------: |
| 심은주 |       [@nyaknya](https://github.com/nyaknya)       | 조예진 |     [@yejiniee](https://github.com/yejiniee)     |
| 노진석 | [@SiWooJinSeok](https://github.com/SiWooJinSeok) | 송상훈 |    [@Song-Sang](https://github.com/Song-Sang)    |

## ⏲️ Duration

2024.03.08(목) ~ 03.25(월)


## 🛠️ Skills & Tools

![Next.js](https://img.shields.io/badge/next.js-%2320232a.svg?style=for-the-badge&logo=next.js&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) <img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css3&logoColor=white"> ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## 📚 Library

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-%23764ABC.svg?style=for-the-badge&logo=redux&logoColor=white)
 ![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/gitmoji-ffdd67?style=for-the-badge&logo=gitmoji&logoColor=white"> ![Day.js](https://img.shields.io/badge/Day.js-%23007ACC?style=for-the-badge&logo=javascript&logoColor=white) ![React Datepicker](https://img.shields.io/badge/React_Datepicker-%23000000?style=for-the-badge&logo=react&logoColor=61DAFB)
![date-fns](https://img.shields.io/badge/date--fns-%23AA4226?style=for-the-badge) ![React Select](https://img.shields.io/badge/React_Select-%2361DAFB?style=for-the-badge&logo=react&logoColor=white) <img src="https://img.shields.io/badge/beautiful_dnd-68BC71?style=for-the-badge&logo=beautiful_dnd&logoColor=white">


## 💬 Community

<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> ![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)

<br/>

---

# ✨로컬 환경 - 설치 및 실행 가이드

## 1. Getting the sources

```bash
git clone https://github.com/Codeit-FE3-part3-team6-Taskify/Taskify.git
cd Taskify
```

## 2. Install packages

```bash
npm install
```

## 3. Run development server

```bash
npm run dev
```

<br>

---


# ✨ Feature

## 0. 헤더, 사이드바

- 헤더(공용 기능)
  - 사용자 프로필(닉네임, 아이콘) 표시합니다.
  - 드롭다운으로 로그아웃, 계정 관리, 내 대시보드로 이동 기능을 제공합니다.
- 헤더(부가 기능)
  - 해당 대시보드의 맴버 구성원을 간단한 UI로 알려줍니다.
  - <초대하기 버튼>을 통한 대시보드 초대하기 모달을 띄울수 있습니다.
     - 타 사용자의 이메일(플랫폼 아이디)를 통해 내 대시보드에 초대 요청을 보낼 수 있습니다.
     - 인풋 요소를 입력하지 않으면 <초대 버튼>은 비활성화 됩니다.
  - 사용자가 대시보드 관리자라면 <관리> 버튼을 통해 해당 대시보드 관리 페이지로 이동할 수 있습니다. 
- 사이드바
  - 로고 버튼을 이용해 나의 대시보드 페이지로 이동합니다.
  - 사용자의 현재 대시보드 목록을 보여줍니다.(페이지네이션)
  - <+ 버튼>을 통해 '새로운 대시보드 생성' 모달을 띄웁니다.

<br>
<img src="https://github.com/Song-Sang/Taskify/assets/152246452/8a0d619a-b69f-4cfe-b1b6-2cf3bcb1675f" alt="초대하기" width="480" height="270">

## 1. 랜딩 페이지

- 로그인이 되어있다면 '나의 대시보드' 페이지로 이동합니다.
- 로그인이 되어있지 않다면 상단에 <로그인, 회원가입 버튼>을 통해 해당 페이지로 이동합니다.

<br>
<img src="https://github.com/Song-Sang/Taskify/assets/152246452/5db0b3d8-7ca7-4add-9bc7-4e42f1adcddb" alt="랜딩" width="480" height="270">

## 2. 로그인 페이지

- <로고 버튼>은 랜딩 페이지로 이동합니다.
- <회원가입 버튼>은 회원가입 페이지로 이동합니다.
- 유효한 이메일과, 비밀번호를 입력하고 <로그인 버튼>을 클릭하면 '나의 대시보드'페이지로 이동합니다.
- 각 인풋 요소는 유효하지 않은 정보가 입력되었을시 경고창을 보여줍니다.
- 비밀번호는 해당 인풋의 아이콘을 통해 숨기거나 나타낼 수 있습니다.
- 로그인 성공시 액세스 토큰을 발급합니다.

<br>
<img src="https://github.com/Song-Sang/Taskify/assets/152246452/5736506e-3235-4ec8-a452-d05996d6bd1b" alt="로그인" width="480" height="270">


## 3. 회원가입 페이지

- <로고 버튼>은 랜딩 페이지로 이동합니다.
- <로그인 버튼>은 회원가입 페이지로 이동합니다.
- 각 인풋 요소는 유효하지 않은 정보가 입력되었을시 경고창을 보여줍니다.
- 모든 인풋 요소가 채워지고 경고창이 없다면 <가입하기 버튼>이 활성화 됩니다.
- 중복 이메일 가입 시도는 모달창을 통해 거절됩니다.

<br>
<img src="https://github.com/Song-Sang/Taskify/assets/152246452/632fe702-fba8-4c2e-8cd7-5bf9df86b4c0" alt="회원가입" width="480" height="270">

## 4. 나의 대시보드 페이지 (헤더, 사이드바)

- 액세스 토큰이 활성화 되어있다면, 랜딩 페이지로 이동 경로는 해당 페이지로 대체됩니다.
- '대시보드 목록' 영역에서 소속된 대시보드 목록을 확인하고, 해당 대시보드로 이동할 수 있습니다.(페이지네이션)
- <새로운 대시보드 버튼>을 통해 '대시보드를 생성'모달을 띄울 수 있습니다.
  - 생성할 대시보드 이름과 아이콘 컬러를 지정합니다.
  - 두 요소가 모두 충족되지 않았을 경우 <생성 버튼>은 비활성화 됩니다.
- 내가 생성한 대시보드는 '왕관 아이콘'을 통해 확인 가능합니다.
- '초대받은 대시보드' 영역을 통해 타인이 생성한 대시보드의 초대요청에 응하거나 거절할 수 있습니다.(무한스크롤)

<br>
<img src="https://github.com/Song-Sang/Taskify/assets/152246452/0bcd8f6a-525e-4c62-82be-25d9e93ecf4b" alt="나의대시보드" width="480" height="270">


## 5. 대시보드 페이지 (헤더, 사이드바)

- 생성된 대시보드는 기본 'To do', 'On progress', 'Done' 컬럼을 가지고 있습니다.
- 컬럼은 <새로운 컬럼 추가히기 버튼>을 통해 '새 컬럼 생성' 모달을 띄울 수 있습니다.
  - 새로운 컬럼을 생성할 수 있습니다.
  - 인풋이 비어있다면 <생성 버튼>은 비활성화 됩니다. 
- 각 컬럼의 제목 옆 아이콘을 통해 삭제 및 수정할 수 있습니다.
- 생성된 칼럼에서 <+ 버튼>을 통해 '할 일 생성' 모달을 띄울 수 있습니다.
  - 담당자, 제목, 설명, 마감일, 태그, 이미지를 지정해서 해당 컬럼에 '할 일 카드'를 추가합니다.
  - 필수 항목을 입력하지 않으면 <생성 버튼>은 비활성화 됩니다
- '할 일 카드'를 선택하면 해당 '할 일 카드'모달을 띄울 수 있습니다.
  -  만들어진 카드 정보를 보여줍니다.
  -  해당 카드에 대한 댓글 작성이 가능합니다, 내가 작성한 댓글은 수정 및 삭제가 가능합니다.(무한스크롤)
  -  <케밥 버튼>을 통해 해당 할 일의 삭제 및 '할 일 수정'모달을 띄울 수 있습니다.
      - 해당 카드의 상태, 담장자, 제목, 설명, 마감일, 태그, 이미지 등 세부 정보를 수정할 수 있습니다.
      - 필수 항목을 입력하지 않으면 <수정 버튼>은 비활성화 됩니다
- 생성된 '할 일 카드'들은 생성된 컬럼 사이를 드래그 앤 드롭으로 이동 가능합니다.

<br>
<img src="https://github.com/Song-Sang/Taskify/assets/152246452/49ded428-c1a3-4f8c-87f5-220ad8aa2f8a" alt="컬럼생성" width="480" height="270">  <img src="https://github.com/Song-Sang/Taskify/assets/152246452/81896808-48ee-4126-88bb-22d8a318ac6c" alt="할일생성" width="480" height="270">

<br>
<img src="https://github.com/Song-Sang/Taskify/assets/152246452/baa92e05-d509-447c-8977-61ad9859a6f6" alt="할일수정" width="480" height="270">

## 6. 대시보드 관리 페이지 (헤더, 사이드바)

- 대시보드 페이지에서 생성자가 본인인 경우, 헤더의 <관리> 버튼을 통해 접근할 수 있습니다.
- 해당 대시보드의 이름 및 컬러 아이콘 색상을 변경할 수 있습니다.
- 해당 대시보드의 현재 구성원을 확인할 수 있습니다, <삭제 버튼>을 통해 기존 구성원을 삭제할 수 있습니다. (페이지네이션)
- 해당 대시보드의 현재 초대 목록을 확인할 수 있습니다. (페이지네이션)
- <대시보드 삭제하기 버튼>을 통해 해당 대시보드을 전체 삭제할 수 있습니다.

<br>
<img src="https://github.com/Song-Sang/Taskify/assets/152246452/234c53d4-1d01-427e-9afd-c00ced09f610" alt="대시보드관리" width="480" height="270">

## 7. 계정 관리 페이지 (헤더, 사이드바)

- 헤더의 <프로필 버튼> 드롭다운의 <내 정보 버튼> 클릭을 통해 접근할 수 있습니다.
- 프로필 이미지와, 닉네임을 변경할 수 있습니다.
- 비밀번호를 변경할 수 있습니다.
  - 모든 인풋 요소가 채워지고 경고창이 없다면 <변경 버튼>이 활성화 됩니다.

<br>
<img src="https://github.com/Song-Sang/Taskify/assets/152246452/c7e1f0bd-7b5c-4112-8fbd-79bfc8401921" alt="계정관리" width="480" height="270">

<br/>

---

# ✨ Project Architecture

## 🔁 User Flow

![2024-03-24_185307](https://github.com/Song-Sang/Taskify/assets/152246452/34901786-afb1-40b0-abeb-eaaa0871818c)

## 📁 Folder structure

```bash
├── public
│   └── images
├── src
│   ├── components
│   │   ├──common
│   │   ├──Dashboard
│   │   ├──MyDashboard
│   │   ├──MyPage
│   │        .
│   │        .
│   │        .
│   ├── constnsts
│   ├── features
│   ├──  hooks
│   ├──  pages
│   ├── styles
│   └── utils
└── run.sh
```

<br/>

---

# ✨ Problem & Solution

### ⚠️ 이전 프로젝트에 비해 페이지 기반 개발을 하기 쉽지않은 구성이고, 다양하게 재사용 할 수 있는 컴포넌트가 많았다는 문제

✅ 초기부터 재사용 가능성이 보이는 컴포넌트는 최대한 분리. <br>
✅ 가능하면 단일 책임 원칙을 지향하고, 유연하게 설계하려고 노력. (ex. 내부 요소를 children으로 받아 사용) <br>
✅ 페이지 단위에 크게 구애받지 않고 기능 주도 개발 형태로 프로젝트 진행.

<br>

### ⚠️ 프로젝트에 모달 관련 로직이 많고, 동일한 상태 데이터를 여러 컴포넌트에서 사용해야하는 로직이 많았던 문제

✅ 전역으로 상태 관리를 해야겠다는 생각. (context API, Redux, Redux-Toolkit, recoil 등) <br>
✅ 크지않은 규모의 프로젝트라는 점, 프로젝트 기간과 러닝 커브를 고려했을 때 비교적 직관적인 학습과 사용을 할 수 있다는 생각에서 Redux-Toolkit 라이브러리 사용.

<br>

### ⚠️ 경험과 학습을 위한 Tailwind css 사용에 관한 문제

✅ 클래스명을,변수명 따로 지정하지 않아 팀프로젝트에 사용하기 좋았지만 자유롭게 사용하기에 생각보다 큰 러닝커브 문제가 있었음. <br>
✅ 지정되어 있는 클래스를 사용할때는 굉장히 간편하지만, 지정되어있지 않은 스타일을 적용하는 부분에 있어서 다른 라이브러리와 큰 차이를 느끼지 못했음. <br>
✅ Tailwind를 단독으로 사용하기보다는, 다른 라이브러리와 같이 사용하면 상당히 유용할 것 같다는 결론. <br>

<br>


### ⚠️ API로 요청을 보내 검색 결과를 가져오는 로직에서 단순 구현하니 입력되는 요소 하나하나 마다 리퀘스트 요청을 보내는 문제

✅ 처음엔 input value 상태 관리 단계에서는 요청을 보내지 않다가, Enter키 입력을 트리거로 요청을 보내는 방법으로 해결. <br>
✅ 그러나 꼭 트리거를 발동해야 검색 결과를 가져오는 방식은 사용자 경험에 부정적이라고 생각해 useDebounce 훅을 적용해서 입력 완료 후 일정 시간이 지나면 요청을 보내는 로직으로 수정.


<br>

### ⚠️react-datepicker의 스타일을 Tailwind로 커스텀하려는데 마음대로 적용되지않는 문제

✅ 어떤 방법으로 Tailwind로 스타일을 적용할 수 있을까 고민해서 react-tailwind-datepicker라는 라이브러리를 찾아 적용해보았지만 원하는대로 스타일을 적용하기 어려웠다.<br>
✅ react-datepicker를 사용해서 props로 customInput을 넘기는 방법으로 시안에 맞는 인풋창을 구현할 수 있었다.

<br>

### ⚠️ accessToken을 어디에 저장할지에 대한 문제

✅ 처음엔 사용해보지 않은 document 쿠키에 저장하여 구현함, 하지만 이게 맞는지에 대한 의문이 생겨 추가 학습을 하다보니 오히려 로컬 스토리지보다도 보안에 취약 하다는 것을 알게 됨.<br>
✅ 더 찾아도 보며 보통 리프레시 토큰을 쿠키에 저장하고 accessToken은 상태 관리에 저장한다는 것을 알게 됨. <br>
✅ 문제는 api에 Refresh Token이 없어 쿠키에 저장 할 수 없고, 학습이 더 필요해 보여서 이번 프로젝트에서는 로컬스토리지를 선택. 

---

# ✨ KPT 회고

## 👍🏻 Keep

- 모두 최선을 다해 각자의 역할에 맡게 잘 해냈다.

- 한명도 빠짐없이 소통이 잘 되어서 프로젝트 진행 자체에 어려움은 전혀 없었다.

- 다들 첫 프로젝트에 비해 확실히 기본 기능 구현 자체에 어려움은 덜 느꼈고 그래서 다양한 라이브러리와, 새로운 로직 적용에 다 같이 집중할 수 있었다.

- 각자의 기능 구현에 사용된 코드를 볼 일이 잦아서 상대방 코드의 장단점을 볼 기회가 많아서 좋았다.  

## 🤔 Problem

- 시간이 예상보다 촉박해서 기능 구현에 집중하느라 챙기지 못한 것들이 많은 듯 싶다.

- 특히 Tailwind를 처음 사용해서 그런지 디자인적인 측면에서 아쉬운점이 많이 보인다.

- 짜여져 있는 API 내에서 프로젝트를 진행하다보니 API로직 관련으로도 원하는 기능을 구현하지 못하는 경우가 많다는걸 종종 느꼈다.

- 아직은 팀프로젝트에 익숙하지는 않아서 서로의 로직이 자주 연결되는 프로젝트를 하다보니 결과적으로 불필요한 코드들도 있고, 컨벤션이 깔끔하게 지켜지지 않은 부분도 있는거같다.


## 🔥 Try

- 앞으로의 프로젝트에서는 진행 중간중간 다 같이 리팩토링을 거쳐서 코드를 정리하고 다음 기능 개발을 하는 방법을 시도해보고싶다.

- 이번 프로젝트도 종료 후 기록해 놓은 문제점들을 리팩토링 하는 시간을 가져야겠다.


<br/>
