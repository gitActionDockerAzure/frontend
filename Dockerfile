FROM node
# 경로 설정하기
# package.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
ADD frontend2.tar /home
WORKDIR /home/frontend
# 명령어 실행 (의존성 설치)
RUN npm install -g /home/frontend
# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
CMD npm start 
