pipeline {
    agent any
    parameters {
        string(name: 'SPEC', defaultValue: ["cypress/integration/*.ts", "cypress/integration/additionaltestcases/*.ts"], description: 'Ej: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }
    
    options {
        ansiColor('xterm')
    }
    stages {
        
        stage('Build'){
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            deleteDir()
        }
    }
}