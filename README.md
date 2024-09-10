# React 연습 및 전역변수관리 라이브러리(recoil)연습

## 사용 스킬

- React
- recoil + recoil-persist
- Tailwind
- react-router-dom

## 소개
- React의 동작 방식이 익숙하지 않아서 제작해본 간단한 쇼핑몰입니다.

## 프로젝트 설명
![스크린샷 2024-09-10 오후 10 43 41](https://github.com/user-attachments/assets/ace4c827-9bbc-4729-8716-918db1b6d047)

- db를 구현해서 데이터 관리하는것은 어려워 mock 데이터를 만들어 리스트를 렌더링하고 있습니다.
- 장바구니 버튼을 누르면 장바구니에 상품이 담깁니다.
![스크린샷 2024-09-10 오후 10 44 44](https://github.com/user-attachments/assets/50941352-4507-47c1-a5e4-351ba1b33e31)
- 장바구니에 담긴 상품은 갯수 조정이 가능하고 체크박스 선택시 갯수에 따라 가격이 책정됩니다.
- recoil을 사용해 장바구니 리스트를 전역으로 관리하고 있습니다.
- recoil-persist를 사용해 전역 데이터를 localstorage에 저장하여 데이터를 저장하고 있습니다.
![스크린샷 2024-09-10 오후 10 45 58](https://github.com/user-attachments/assets/586ae132-939d-4a60-bf02-8da3c26e9a9d)
- dropdown을 통해 상품을 가격, 스코어순으로 정렬이 가능합니다.
