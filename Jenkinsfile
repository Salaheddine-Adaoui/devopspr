pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/TON_USER/project-devops.git'
            }
        }

        stage('Test') {
            steps {
                echo 'Git + Jenkins OK ✔'
            }
        }
    }
}