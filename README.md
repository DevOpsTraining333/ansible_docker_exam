# ansible_docker_exam Readme (todo)

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
     
