pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git branch: 'master', url: 'https://github.com/sanya2401/QuoteGenerator.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running tests...'
                    bat 'npm test -- --watchAll=false'
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    echo 'Building the project...'
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying the project...'
                    // You can add any deployment steps here, such as copying files to a server.
                }
            }
        }
    }

    post {
        always {
            // Archive build artifacts (optional)
            archiveArtifacts artifacts: 'build/**/*', allowEmptyArchive: true

            echo 'Pipeline finished.'
        }
    }
}
