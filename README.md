# NAGP Demo Service - Weather Check

Fetch Wheather details

## Description

The service fetches wheather condition from a vendor and saves in mongodb database hosted on kubernetes

## Code Repository

https://github.com/Aaquib070/nagp-demo-wheather-service

### File structure

- '/application': contains service layer code
- 'Dockerfile': docker file service layer
- 'Deploymnet.yaml': Kubernetes Deployment Yaml file for service layer
- 'Service.yaml': Kubernetes Service Yaml file for service layer
- 'Devops/'
  - 'app-config.yaml': Configmap for database configuration like database url and database name
  - 'app-secret.yaml': Kubernetes Secrets for sensetive keys like database password
  - 'database-pv.yaml': PersistentVolume for database
  - 'database-pvc.yaml': PersistentVolumeClaim for database
  - 'db-deploy.yaml':  Kubernetes Deployment Yaml file for mongodb database
  - 'db-service.yaml': Kubernetes Service Yaml file for mongodb database

## Dockerhub Repos

https://hub.docker.com/r/1290950/demo-service

## Service Layer

### API
- Get wheather from database 
  - curl --location --request GET 'http://a42878683407a4a4ab2696a82f7e7b83-1752270017.ap-south-1.elb.amazonaws.com/api/wheather'
- Fetch wheather from vendor and add to database
  - curl --location --request GET 'http://a42878683407a4a4ab2696a82f7e7b83-1752270017.ap-south-1.elb.amazonaws.com/api/wheather/check-wheather'

### Frontend

- http://a42878683407a4a4ab2696a82f7e7b83-1752270017.ap-south-1.elb.amazonaws.com

## Demo

Demo video link

[Demo Video](link-to-demo-video)

## Technologies Used

- NodeJs
- ReactJs
- Mongodb
- Docker
- Kubernetes
- Gthub
- AWS

## Installation

Run following command :

- npm install
- npm run start


### Contact

Aaquib Faridi (aaquibfaridi003@gmail.com)
