#!/usr/bin/env python3
"""Contains insert school"""


def insert_school(mongo_collection, **kwargs):
    """Insert new document in collection"""
    newDict = {}
    for element, value in kwargs.items():
        newDict[element] = value

    return mongo_collection.insert(newDict)
