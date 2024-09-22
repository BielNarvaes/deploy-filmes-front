# Usar uma imagem base com o JDK 17 (ou uma versão compatível com sua aplicação)
FROM openjdk:17-jdk-slim

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o JAR gerado para dentro do container
COPY target/catalogo-filmes-0.0.1-SNAPSHOT.jar app.jar

# Expor a porta 25000 (a porta que o Spring Boot irá rodar)
EXPOSE 25000

# Comando para rodar o JAR quando o container iniciar
ENTRYPOINT ["java", "-jar", "app.jar"]
