pipeline {
    agent any

     environment {
        DOCKERHUB_CREDENTIALS = credentials('docker_cred') // Reemplaza con el ID de tus credenciales de Docker Hub en Jenkins
        DOCKER_IMAGE = "jorgechirivi/proyecto-diplomado" // Reemplaza con tu usuario e imagen de Docker Hub
        NODE_VERSION = '14' // Reemplaza con la versión de Node.js que necesitas
    }

    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('unit and integration tests') { 
            steps {
                sh 'npm test' 
            }
        }
        stage('e2e tests') { 
            steps {
                sh 'npm run test:e2e' 
            }
        }
        stage('Construir Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("${env.DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Push Docker Hub Image') {
            steps {
                withCredentials([usernamePassword(credentialsId:'docker_cred', usernameVariable:'DOCKERHUB_USERNAME', passwordVariable:'DOCKERHUB_PASSWORD')]){
                    sh "echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"                    
                }
            }
        }

        stage('Clean Up') {
            steps {
                sh 'docker rmi ${DOCKER_IMAGE}:${BUILD_NUMBER}'                
            }
        }
    }
}