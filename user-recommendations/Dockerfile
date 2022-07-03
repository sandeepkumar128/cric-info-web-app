FROM java:8-jre
WORKDIR /usr/src

COPY ./target/UserRecommendations-0.0.1-SNAPSHOT.jar UserRecommendations-0.0.1-SNAPSHOT.jar
#EXPOSE 8086
ENTRYPOINT ["java","-jar","/usr/src/UserRecommendations-0.0.1-SNAPSHOT.jar"]