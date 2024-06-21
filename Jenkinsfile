pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm --version' 
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
    }
}