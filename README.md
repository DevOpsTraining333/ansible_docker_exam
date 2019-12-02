nsible_docker_exam Readme (todo)

Create 3 virtual hosts: ansible-control (192.168.56.216), ansible-web (192.168.56.217), ansible-node (192.168.56.218)
Memory: 1024Mb enough.

SSH into Ansible controller: 
     ssh root@192.168.56.216
     
Create exam user with password 000000 and home folder /home/exam:
    
     useradd exam -d /home/exam
     passwd exam
     usermod -aG wheel exam
     
Switch to exam user and generate public-private key
     
     su exam
     ssh-keygen
     
Install Ansible as root

     su root
     yum install -y ansible
     
Create the first inventory file to /home/exam with root as ansible user

     cd /home/exam
     vi inventory1
     
SSH to the other hosts as root so the controller becomes a known host

     ssh root@192.168.56.217
     ssh root@192.168.56.218

Create (and run as root) the first yaml file which will add exam users on the other hosts

     vi create_user.yaml
     ansible-playbook -i inventory1 -k create_user.yaml
     
Switch to exam user and create the final inventory2 file so exam is the default ansible user

     vi inventory2
     su exam
     
Create and run a playbook to install httpd on ansible-web

     vi httpd_install.yaml
     ansible-playbook -i inventory2 httpd_install.yaml
     
Also use a proxytemplate file for reverse proxy on the web server
     
     vi proxytemplate
     
We need a playbook that installs nodejs and an index file for nodejs. We also need a unit file so nodejs becomes a service

     vi index.js
     vi nodejs_install.yaml
     vi node.service
     ansible-playbook -i inventory2 nodejs_install
     
     






     
