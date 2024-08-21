#!/usr/bin/env python3
"""Script that provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient

client = MongoClient('mongodb://127.0.0.1:27017')
nginx_collection = client.logs.nginx

nginx = nginx_collection.find()

get_count = nginx_collection.count_documents({"method": 'GET'})
post_count = nginx_collection.count_documents({"method": 'POST'})
put_count = nginx_collection.count_documents({"method": 'PUT'})
patch_count = nginx_collection.count_documents({"method": 'PATCH'})
delete_count = nginx_collection.count_documents({"method": 'DELETE'})
status_count = nginx_collection.count_documents({"path": "/status"})
print("{} logs".format(nginx.count()))
print("Methods:")
print(f"\tmethod GET: {get_count}")
print(f"\tmethod POST: {post_count}")
print(f"\tmethod PUT: {put_count}")
print(f"\tmethod PATCH: {patch_count}")
print(f"\tmethod DELETE: {delete_count}")
print(f"{status_count} status check")
