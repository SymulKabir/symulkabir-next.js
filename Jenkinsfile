pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        GITHUB_TOKEN = credentials('github-access-token') // Jenkins secret
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
                            git pull
                        else
                            git clone https://$GITHUB_TOKEN@github.com/SymulKabir/symulkabir-next.js.git .
                        fi
                        export PATH=\$PATH:/usr/local/bin
                        npm install
                        npm run build
                        pm2 delete myApp || true
                        pm2 start npm -- start --name myApp
                        pm2 save
                    '
                    """
                }
            }
        }
    }
}
