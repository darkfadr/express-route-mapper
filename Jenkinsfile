#!/usr/bin/groovy

@Library('isd-pipeline-lib') _

def team = ''

pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        bat 'npm install'
        bat 'npm run build'
      }
    }
    stage('Test'){
      steps{
        //bat 'npm test'
	     echo 'Tests need to be worked out'
      }
    }
    stage('Deploy'){
      when {
        not { branch 'master' }
      }
      steps {
        //deploy('FL1CDISDWB01', 'dist', "\\is-logging-api\\_${getBranch()}\\")
	      echo 'Bundle'
      }
    }
    stage('Deploy to CDN') {
    	when { branch 'master'}
    	steps {
    		//deployParallel(['FL1CPIISWB01', 'FL1CPIISWB02'], 'dist', '\\is-logging-api\\')
        bat 'xcopy /s /y /i dist \\\\FL1CPIISWB01\\e\$\\StaticContent\\apps\\misc\\is-logging\\'
    	}
    }
  }
  post {
    success { slack(team, "SUCCESS: Build #${env.BUILD_NUMBER} for ${env.JOB_NAME} was successfully deployed.", '#7CB342') }
    failure { slack(team, "FAILURE: Build #${env.BUILD_NUMBER} for ${env.JOB_NAME} failed. You can review what happened at ${getURL()}", 'danger') }
  }
}
