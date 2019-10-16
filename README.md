# assignMB

In this project the django is integrated with react so for run this project you should have react running and also python. But we can run the project on this python server http://localhost:8000/   

Steps to run the Project,  
 a) To activate virtual enviourment  
    1) First open command prompt.  
    2) `cd (path of the folder where your project is placed.)`  
    3) go MindBrowserAss to the folder,  
           >> `cd assignMB\MindBrowserAss`  
    4)`pipenv shell`  
    5)`pip install -r requirements.txt`  
    (requirements.txt file present at location assignMB\MindBrowserAss  
You can refer https://stackoverflow.com/questions/9207430/how-to-copy-clone-a-virtual-environment-from-server-to-local-machine  

    
    
>b) For react you should go to the assignMB\MindBrowserAss\Management\frontend folder and install the node modules in that folder.The           commands for that are as follows,  
            >>1) First open command prompt.  
           >> 2) cd (path of the folder where your project is placed.)  
           >> 3) go  to the MindBrowserAss folder,  
              >>> cd assignMB\MindBrowserAss  
            >>4) For activate virtual enviournment,  
              >>>  pipenv shell  
            >>5)go to the assignMB\MindBrowserAss\Management\frontend folder  
              >>>  cd assignMB\MindBrowserAss\Management\frontend   
            >>5) installing node modules,  
              >>>  npm install  
            >>6)  to run the react in browser,  
              >>>  npm start  
            after that, react server is running on the Localhost:/3000 you can check it.  
            Dont close the command prompt or dont quit the running react server.  


b) for run the python server, you should follow following steps,
    1)open another command prompt
    2) cd (path of the folder where your project is placed.)
    3) go MindBrowserAss to the folder,
         cd assignMB\MindBrowserAss
    4) For activate virtual enviournment,
          pipenv shell
     5) go to Management folder
        cd Management
     6) to run python server
        python manage.py runserver
      after that, python server is running on the Localhost:/8000 you can check it.
c) Go to the web browser and check for http://localhost:8000/ 
        
  Also you can check for references 
  1) for django and react integration.
         http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/
         
 
     

      

