FROM ghcr.io/apline

COPY . /project
WORKDIR /project
RUN ["apk", "add", "zola"]
RUN ["zola", "build"]

FROM ghcr.io/static-web-server/static-web-server:2
WORKDIR /
COPY --from=zola /project/public /public