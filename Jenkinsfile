pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Salaheddine-Adaoui/devopspr.git'
            }
        }

        stage('Test') {
            steps {
                echo 'Git + Jenkins OK ✔'
            }
        }
    }
}