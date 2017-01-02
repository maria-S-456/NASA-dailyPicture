# NASA-dailyPicture

NASA Daily Photograph

NASA is a United States Agency responsible for scientific study related to air and outer space. NASA offers a lot of scientific information to the public online, some of that public information is used to run this application. It is a database in which a daily picture is posted every day relating to astronomical events and phenomena. In this application, a user enters a date in a specific format in order to get one of NASA's daily pictures that was posted on that particular date.

Technology used
HTML- This is used to design the frontend
CSS- This is used to style the app
Javascript- This is helping to submit the form and making it dynamic
Bootstrap- This is used to make the app responsive
Jquery- This is used to call the api

Methodology
NASA Daily Image Viewer api let us extract image based on date.
API: https://api.nasa.gov/planetary/apod
This API expects two parameters:
•	Date[yyyy-mm-dd]
•	ApiKey
In return, give JSON data:
/ 20170102113709
// https://api.nasa.gov/planetary/apod?api_key=EhG1k6n5owkDLwymr8VLuyohnQbd4xYK3bUigawl

{
  "copyright": "Fritz Helmut Hemmerich",
  "date": "2017-01-02",
  "explanation": "An old comet has returned to the inner Solar System. Not only is Comet 45P/HondaMrkosPajduáková physically ancient, it was first discovered 13 orbits ago in 1948. Comet 45P spends most of its time out near the orbit of Jupiter and last neared the Sun in 2011.  Over the past few months, however, Comet 45P's new sunward plummet has brightened it considerably.  Two days ago, the comet passed the closest part of its orbit to the Sun.  The comet is currently visible with binoculars over the western horizon just after sunset, not far from the much brighter planet Venus.  Pictured, Comet 45P was captured last week sporting a long ion tail with impressive structure.  Comet 45P will pass relatively close to the Earth early next month.    APOD Lecture: Friday, Jan. 6,  Amateur Astronomers Association of New York City",
  "hdurl": "http://apod.nasa.gov/apod/image/1701/Comet45P_Hemmerich_2180.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Comet 45P Returns",
  "url": "http://apod.nasa.gov/apod/image/1701/Comet45P_Hemmerich_960.jpg"
} 
On submit we are passing date and getting data in return which is displayed using frontend.
