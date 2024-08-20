#!/usr/bin/env python3
"""Contains insert school"""


def insert_school(mongo_collection, **kwargs):
    """Insert new document in collection"""
    _id = mongo_collection.insert_one(kwargs)
    return _id
