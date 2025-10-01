pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    wrappers {
        ansiColor('xterm')
    }

    triggers {
        pollSCM('H/2 * * * *') // Poll every 2 minutes
    }

    environment {
        APP_NAME = "myapp"
        DOCKER_IMAGE = "myapp:latest"
        REMOTE_HOST = "root@micple.com"
        DEPLOY_DIR = "/var/www/myapp"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    credentialsId: 'github-access-token',
                    url: 'https://github.com/SymulKabir/symulkabir-next.js.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'  // industry best practice (clean install)
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Lint & Test') {
            steps {
                sh 'npm run lint || true'   // run lint, don't fail pipeline if warnings
                // If you add tests in future: sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                docker build --pull --no-cache \
                    -t $DOCKER_IMAGE .
                '''
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['micple-server']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no $REMOTE_HOST '
                        mkdir -p $DEPLOY_DIR
                    '
                    scp -o StrictHostKeyChecking=no docker-compose.yml $REMOTE_HOST:$DEPLOY_DIR/
                    ssh -o StrictHostKeyChecking=no $REMOTE_HOST "
                        cd $DEPLOY_DIR
                        docker stop $APP_NAME || true
                        docker rm $APP_NAME || true
                        docker run -d --name $APP_NAME -p 3000:3000 $DOCKER_IMAGE
                    "
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful for $APP_NAME"
        }
        failure {
            echo "❌ Deployment failed!"
        }
    }
}
