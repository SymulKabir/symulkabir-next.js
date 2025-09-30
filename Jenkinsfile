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
                            git pull
                        else
                            git clone https://github.com/SymulKabir/symulkabir-next.js.git .
                        fi
                      
                    '
                    """
                }
            }
        }
    }
}
