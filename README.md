# TDD-ToDoList
![Npm](https://img.shields.io/badge/npm-8.1.0-orange?style=flat-square)
![Node.js](https://img.shields.io/badge/node.js-16.13.0-blue?style=flat-square)

소프트웨어를 개발하고 서비스를 유지하기 위해서는 테스트 코드 작성은 중요합니다. 테스트 코드는 수동으로 모든 기능을 확인하는 시간을 줄여주고, 버그의 발생을 줄여주거나 발생한 버그가 다시 발생하지 않도록 해주며 코드를 수정할 때 수정한 코드가 다른 코드에 영향을 주어 버그를 발생시키는지를 간단하게 확인할 수 있게 해줍니다. 또한, 다른 팀원들에게 신뢰할 수 있는 코드를 공유할 수 있으며 서비스를 안정적으로 유지할 수 있도록 도와줍니다. 이처럼 중요한 테스트 코드를 작성하는 법을 익히고 더 나아가 테스트 주도 개발(Test-driven-development, TDD) 방법론을 프로젝트에 적용하는 방법을 익히기 위해 해당 프로젝트를 진행하였습니다.

### Built With
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white)
- ![Styled-Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white)

<br />

## Getting Started
1. Clone the repo
   ```
   $ git clone https://github.com/byeongminn/TDD-ToDoList.git
   ```
2. Install NPM packages
   ```
   $ npm install
   ```
3. Start the project
   ```
   $ npm run start
   ```

<br />

## Usage
### [할 일 목록]
- 할 일 목록이 표출됩니다.
- 할 일 클릭 시 할 일 상세 페이지로 이동합니다.
- 할 일의 삭제 버튼 클릭 시 해당 할 일이 목록에서 제거됩니다.
- '+' 버튼 클릭 시 할 일 추가 페이지로 이동합니다.

|할 일 목록|
|--------|
|<img width="554" alt="main" src="https://github.com/byeongminn/TDD-ToDoList/assets/74594510/b551aa84-fdf3-4fa2-a04a-3b652aaa02aa">|

<br />

### [할 일 추가]
- 할 일을 입력한 후 추가 버튼을 클릭하면 할 일이 추가되며, 할 일 목록 페이지로 이동합니다.
- 할 일을 입력하지 않고 추가 버튼을 클릭할 시에는 아무런 이벤트가 발생하지 않습니다.

|할 일 추가|
|--------|
|<img width="554" alt="add" src="https://github.com/byeongminn/TDD-ToDoList/assets/74594510/038df2ff-c437-4b6d-8654-8e8d741a3ced">|

<br />

### [할 일 상세]
- 할 일이 표출됩니다.
- 삭제 버튼 클릭 시 해당 할 일이 목록에서 제거되며, 할 일 목록 페이지로 이동합니다.

|할 일 상세|
|--------|
|<img width="554" alt="detail" src="https://github.com/byeongminn/TDD-ToDoList/assets/74594510/cd8089ae-cdc6-4646-8eff-c6c5a38e8393">|

<br />

### [404]
- 올바르지 않은 URL 접근 시 404 페이지로 이동합니다.

|404|
|---|
|<img width="554" alt="error" src="https://github.com/byeongminn/TDD-ToDoList/assets/74594510/a6d849a9-716f-4787-a90b-92911f3330e1">|

<br />
