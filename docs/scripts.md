.\.venv\Scripts\Activate


#create new postgres on docker, connect with Pgadmin

docker run --name postgres-rating -e POSTGRES_PASSWORD=mysecretpassword -p 5050:5432 -d postgres
