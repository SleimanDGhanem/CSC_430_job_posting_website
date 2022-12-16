•	Users shall be able to login and register
•	Users shall be able to post jobs
•	Users shall be able to view jobs
•	Users shall be able to apply to the job
•	Users shall be able to create jobs
•	Users shall be able to view their created jobs
•	Users shall be able to view their applied jobs
users shall be able to view jobs based on their tags
users shall be able to view users that have applied to their jobs

A job will consist of:
	- title
	- description
	- requirements 



Tables:
users:
- user_id
- name
- email
- password
- description
- tags

Groups:
- group_id
- group_name
- group_description
- users_count (can be added)

pivot(user joined groups):
- user_id
- group_id
- is_joined

posts:
- tags
- title
- email
- descriptoin
- post_description
- post_URL
- is_deleted

applications:
- job_id
- user_id

blacklist:
- blacklisted_id
- user_id



1- Login -form
2- Register -form
3- personal -page
	- display all jobs from all groups

4- create jobs: -page


10- chat room

apis:
1- login
2- register
3- get_posts
4- post

due to time costraints there were many functions removed
