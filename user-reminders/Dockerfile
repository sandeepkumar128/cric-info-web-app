FROM java:8-jre
WORKDIR /usr/src

COPY ./target/UserReminders-0.0.1-SNAPSHOT.jar UserReminders-0.0.1-SNAPSHOT.jar
#EXPOSE 8087
ENTRYPOINT ["java","-jar","/usr/src/UserReminders-0.0.1-SNAPSHOT.jar"]