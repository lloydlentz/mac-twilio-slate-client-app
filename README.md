# mac-twilio-slate-client-app
Simple tool to use Twilio CLI to make calls from Slate


  - Following instructions from https://www.twilio.com/docs/voice/client/javascript/quickstart
  - install node on your system https://nodejs.org/en/download/
  - restart your terminal or Visual Studio Code 
  - From the Command Line:   npm install twilio-cli -g
  - Note, for me I had to update my windows execution policy to execute "twilio".  
    - Open Powershell as Administrator
    - Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  - From the Command Line: twilio login
    - Enter keys and other things from https://www.twilio.com/console/project/settings
  - From the Command Line: twilio plugins:install @twilio-labs/plugin-serverless
  - From the Command Line: twilio serverless:init mac-slate-client-app --template="voice-client-javascript"
    - Update the name fo your app "mac-slate-client-app" really will be fine, they will annonomize the app for you.
  - From the Command Line: cd mac-slate-client-app
  - Open the **.env** file, and update your password to something unique.
  - From the Command Line: twilio serverless:deploy
  - Open your brower to the ***YOUR-URL.twil.io***/admin/index.html
  - Log in with your unique password, run the setup checks.  

Awesome.  If all that looks good.
  - From the Command Line:  cd ../
  - From the Command Line:  git clone 
