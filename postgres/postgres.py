import psycopg2
import psycopg2.extras

conn = psycopg2.connect("sslmode=require host=aws-us-east-1-portal.17.dblayer.com port=11610 dbname=bookstore user=admin password=DBEIQOCFEBUBQYFI")

cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

# query the DB
cur.execute("SELECT * FROM books;")
row = cur.fetchone()
while row:
    print("Title: " + row["title"])
    print("Description: " + row["description"])
    print("Author_id: " + str(row["author_id"]))
    print("Price: " + str(row["price"]))
    print("Releases: " + str(row["releases"]))
    row = cur.fetchone()

cur.close()
