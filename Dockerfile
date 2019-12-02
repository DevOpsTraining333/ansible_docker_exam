FROM centos:7
COPY index_docker.js index_docker.js
RUN yum -y install epel-release
RUN yum -y install nodejs
CMD node index_docker.js
