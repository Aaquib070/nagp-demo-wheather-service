# NAGP Demo Service - Weather Check

Fetch Wheather details

## Description

The service fetches wheather condition from a vendor and saves in mongodb database hosted on kubernetes

## Code Repository

https://github.com/Aaquib070/nagp-demo-wheather-service

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


## Contact

Aaquib Faridi (aaquibfaridi003@gmail.com)
