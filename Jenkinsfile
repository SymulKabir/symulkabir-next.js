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
                    sh '''
                        ssh -o StrictHostKeyChecking=no root@micple.com " 
                        cd /var/www/myapp || mkdir /var/www/myapp
                        cd /var/www/myapp
                         || git pull
                        if [ -d ".git" ]; then
                            git pull
                        else
                            git clone git@github.com:SymulKabir/symulkabir-next.js.git .
                        fi
                        npm install
                        npm run build
                        pm2 delete myApp || true
                        pm2 start "npm start" --name "myApp
                        pm2 save
                        "
                    '''
                }
            }
        }
    }
}
