# axios_weather

GIT

1. git을 올릴 때는 vs-code에서 정확히 해당 프로젝트가 열려있어야한다
2. github에서 레포지토리를 생성했을 때 readme.md를 생성하면 커밋 히스토리가 하나 쌓임
3. 현재 깃허브의 커밋 히스토리와 vs-code의 커밋히스토리가 다르기 때문에 push하지 못하고 pull 하라는 에러
4. 막상 pull을 받아보니까 두 히스토리는 시작점이 다르기 때문에 비교할 수 없는 히스토리,
   시작 점이 다르다는 것을 넘어서 비교할 수 없는 히스토리
5. rebase 명령어를 통해 커밋 이력이 없는 merge를 시켜준다
6. git pull origin main --rebase
7. 단, 해당 머지가 끝나면, git rebase --continue 명령어를 통해 리베이스가 끝났다는 것을 알려줘야 함
8. git commit -am 'init' 기존에 있던 커밋 내용을 !덮어씨워! 줌 => 마지막 커밋으로 변경
   git commit -m 'init'
   --> rebase --> 수정사항이 생김 -> 커밋 메세지를 새로날리자니 커밋 히스토리가 조금 더러워짐
   am을 써서 기존에 있던 커밋 히스토리를 덮어 씌워줌

9. .env에 숨기기
