#!/usr/bin/env python3
"""Contains school_by_topic"""


def schools_by_topic(mongo_collection, topic):
    """Returns a list of school having
    specific topic"""
    collection = mongo_collection.find(
        {"topics": "Python"}
    )
    return collection
