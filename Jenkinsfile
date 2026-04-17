pipeline {
    agent any
    tools {
        maven 'maven'   // ⚠️ nom EXACT dans Jenkins
    }

    stages {
        stage('Test') {
            steps {
                echo 'Git + Jenkins OK 2 3 4 5✔'
            }
        }
        stage('backend build'){
            steps{
                sh 'cd backend && mvn clean package'
            }
        }
        stage('Build Docker Images') {
                steps {
                    sh 'docker build -t backend ./backend'
                    sh 'docker build -t frontend ./frontend'
                }
            }

        stage('Deploy Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
        
}