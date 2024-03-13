pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the Git repository
                git credentialsId: 'paras-git-credentials', url: 'https://github.com/parjain8/movie-booking-service.git'
        }
        }

        stage('Build') {
            steps {
           // Install dependencies and build the NestJS service
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests for the NestJS service
           sh 'npm run test'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the NestJS service to your target environment
                // Replace the following command with your deployment steps
                sh 'npm run deploy'
            }
        }
    }
}
