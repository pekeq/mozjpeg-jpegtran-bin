FROM docker.io/library/alpine:latest
RUN apk --update --no-cache upgrade && apk add --no-cache \
    build-base \
    nasm \
    cmake \
    ninja \
    curl \
    libpng-dev libpng-static \
    zlib-dev zlib-static
RUN adduser -G wheel -D builder
WORKDIR /home/builder
USER builder
ENV mozjpeg_version 4.0.3
# 2021-02-25 UTC
ENV SOURCE_DATE_EPOCH 1614211200
COPY /build.sh build.sh
RUN ["/bin/sh", "build.sh"]
