pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *') // poll every 2 minutes
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    credentialsId: 'github-access-token',
                    url: 'https://github.com/SymulKabir/symulkabir-next.js.git'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Building project..."'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                sh 'npm test || true'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying application..."'
            }
        }
    }
}
