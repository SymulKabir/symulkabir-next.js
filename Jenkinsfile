pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    triggers {
        pollSCM('H/2 * * * *')
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

        stage('Build & Deploy') {
            steps {
                sshagent(['micple-server']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no root@micple.com '
                        mkdir -p /var/www/myapp
                        cd /var/www/myapp
                        if [ -d .git ]; then
                            git pull origin master
                        else
                            git clone https://github.com/SymulKabir/symulkabir-next.js.git /var/www/myapp
                        fi

                        WORKDIR="/var/www/myapp"
                        cd "$WORKDIR"

                        export PATH="/root/.nvm/versions/node/v14.21.3/bin:$PATH"
                        npm install
                        npm run build
                        npm start
                    '
                    '''
                }
            }
        }
    }
}
