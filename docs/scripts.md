python-mvenvvenv

.\.venv\Scripts\Activate

#create new postgres on docker, connect with Pgadmin

docker run --name postgres-rating -e POSTGRES_PASSWORD=123 -p 5050:5432 -d postgres

psql -h localhost -p 5050 -U postgres -W
