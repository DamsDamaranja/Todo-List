pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-app"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Clone Repository') {
            steps {

                 git branch: 'main', credentialsId: 'git-credentials', url: 'https://github.com/DamsDamaranja/Todo-List.git'

            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy image --severity CRITICAL --exit-code 1 $IMAGE_NAME:$IMAGE_TAG'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop react-container || true
                docker rm react-container || true
                docker run -d --name react-container -p 8080:80 $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }
    }
}
