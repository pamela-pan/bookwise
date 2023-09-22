# BookWise Project
This project explores the spread of election-related misinformation and political book discussions on Twitter. 

Contributors: Courtney Beckham, Pamela Pan, Andrea Wan

Cornell Tech | INFO 5330 - Technology, Media, and Democracy

## Part I: Data Visualization App
Link: [https://pamela-pan.github.io/tmd-final-viz-app/]
<img width="1493" alt="image" src="https://github.com/pamela-pan/bookwise/assets/53935081/858f1a69-d080-439e-9c87-e68dc98aa82a">

The website features a Google map containing the geocoded information from the Google Maps API view centering the United States and displays the areas where people were tweeting about political books and misinformation narratives. For a speed-maximizing user experience, the website prototype only imported 15% of the tweets data, which were randomly and respectively drawn from two datasets (books and misinformation narratives).

<img width="1079" alt="image" src="https://github.com/pamela-pan/bookwise/assets/53935081/719e5c11-b106-4c26-ab42-cee7aefc384f">

In the map, the green circle represents discussions about books, while the red triangle represents the misinformation narratives. A drop down menu is implemented for users to select the dataset of interest. Then, users can hover over the individual data points to learn about what specific narrative or book the user was tweeting about. 

## Part II: Data Analysis
Utilizing the geopandas package, our team was able to join user locations to their respective state and to the dataset of 2020 presidential candidates. Using this cleaned dataset, for every state we were able to calculate the percentage of users in that state that were tweeting about the misinformation narratives versus the political books. We also were able to calculate the percentage of counties in the state that voted for the 2020 Democratic Presidential Candidate Joe Biden versus the percentage of counties in the state that voted for the 2020 Republican Presidential Candidate Donald Trump.

Utilizing the Python corr() function with the Pearson standard correlation coefficient, we analyzed correlations between the political information and tweet information. As seen in the figure below, there is a moderately positive correlation between users tweeting about misinformation and counties that voted Republican in 2020. There is also a negative correlation between users tweeting about books and counties that voted Republican in 2020. The inverse is true for Democrats, with a moderate correlation between users tweeting about books and counties that voted Democrat, and a negative correlation between users tweeting about misinformation and counties that voted Democrat. This suggests that misinformation is more likely to spread in areas that voted Republican in the 2020 election, while more book discourse is likely to spread in areas that voted Democrat. However, it is important to note that correlation does not equal causation, and that many other factors and variables were excluded from the scope of this project that could be causing this correlation.

<img width="746" alt="image" src="https://github.com/pamela-pan/bookwise/assets/53935081/45182f49-0fcb-4a69-af74-f7f2876d6ac6">

Fig 1. Correlation between partisan bias, books, and misinformation

<img width="568" alt="image" src="https://github.com/pamela-pan/bookwise/assets/53935081/9da1d638-2248-4770-8b37-bd1a2ed5b2ae">

Fig. 2: Relationship between reading habits and voting patterns


## Contributions

• Courtney Beckham:

– Pulled all tweet posts for the misinformation narratives and NYT bestsellers list.

– Pulled all tweet author information for the misinformation narratives and NYT bestsellers list.

– Connected to and utilized the Google Maps API to resolve string locations to latitude/longitudes.
– Utilized Geopandas to perform geospatial analysis of authors

– Utilized Python correlation package to perform statistical analysis of authors

• Pamela Pan:

– Sampled and cleaned geospatial data as preparation for visualization.
– Created interactive data visualization web application using React.JS.
– Conducted literature review on the topic of misinformation, book readership, and information literacy.

• Andrea Wan:
– Discovered the political books angle and found data from New York Time developer API and filtered the top 10 books on the day after the 2020 election

– Collected and pre-processed 2020 Election Candidate data from Kaggle

– Formatted the paper and presentations and brainstormed policy suggestions
