FROM java:8-jre
WORKDIR /usr/src
ENV MYSQL_HOST=localhost
ENV MYSQL_DATABASE=cMatchAppDB
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=Root@123
COPY ./target/User-0.0.1-SNAPSHOT.jar User-0.0.1-SNAPSHOT.jar
#EXPOSE 8085
ENTRYPOINT ["java","-jar","/usr/src/User-0.0.1-SNAPSHOT.jar"]