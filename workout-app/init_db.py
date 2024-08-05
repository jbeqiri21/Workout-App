import psycopg2

conn = psycopg2.connect(database="postgres", host="localhost", user="postgres", password="<PASSWORD>")
cur = conn.cursor()

cur.execute('''CREATE TABLE IF NOT EXISTS crudTutorial(id serial PRIMARY KEY, name varchar(100), description varchar(100))''')

cur.execute('''INSERT INTO crudTutorial (name, description) VALUES ('first name','description')''')

conn.commit()

cur.close()
conn.close()