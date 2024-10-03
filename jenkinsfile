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
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'npm test -- --watchAll=false'
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    echo 'Building the project...'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying the application...'
                    // Add your deployment steps here (e.g., copy files to a server or deploy to AWS)
                }
            }
        }
    }

    post {
        always {
            // Archive build artifacts (optional)
            archiveArtifacts artifacts: 'build/**/*', allowEmptyArchive: true

            // Notify if the build fails
            echo 'Pipeline finished.'
        }
    }
}
