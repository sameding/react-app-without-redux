1. It took around 2 hours and a half to write this app from scratch. If I have more time I would add redux to app to better manage the state as well as a middleware such as saga middleware where all the async operations will be done. Depending on the environment where the app will be deployed, it can also be a good idea to dockerised this app in order to make it more portable.

2. JavaScript ES6 brings new syntax and new awesome features to make your code more modern and more readable.
  For example :

   ++ Arrow functions as used the following snippet taken from /src/app.js ``handleChange = (event) => {
    this.setState({searchWord: event.target.value});
  };``

 ++ The rest parameter and spread operator as shown from the snippet taken from /src/REstaurant.js ``this.state = {
          ...props,
          data: null
      }``

3. Tracking issues on production can be achieved by doing the following:


  ++ Check CPU and memory usage. Most server offer that functionality

  ++ Using the logs to monitor errors. This can be achieved by logging all the requests to elastic search database. Then view monitoring data from Kibana where it’s easy to spot issues at a glance or delve into the system behaviour over time to diagnose operational issues. In addition to the built-in status warnings, it is also possible to set up custom alerts based on the data in the monitoring indices. 

4. One way to improve this API is to add another response format such as XML. The fact is that there are still a lot of other applications outside that use XML. If it was possible to pass a parameter to specify the format to return it would be good.

  Another thing to add would be making it secure by using a simple token that is getting generated on the first hand and then used when requests are made

5. Description in JSON
``{
  "name": "Samuel",
  "lastname": "Eding",
  "email": "smleding28@gmail.com",
  "livesin": "Toronto, Canada",
  "passions": [
    "Programming",
    "Traveling",
    "Teaching others"
  ],
  "dreams": [
    "To make this world a better place!"
  ],
  "believes": [
    "You always miss 100% of the shoots that you don't take"
  ]
}``

