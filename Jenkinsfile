pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
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
                sh """
                ssh -o StrictHostKeyChecking=no root@micple.com '
                    mkdir -p /var/www/myapp
                    cd /var/www/myapp
                    if [ -d .git ]; then
                        git pull origin master
                    else
                        git clone https://github.com/SymulKabir/symulkabir-next.js.git /var/www/myapp
                    fi
                    docker build -t myapp ./
                    docker stop myapp || true
                    docker rm myapp || true
                    docker run -d -p 3000:3000 --name myapp myapp
                    
                '
                """
            }
        }
    }

    }
}
