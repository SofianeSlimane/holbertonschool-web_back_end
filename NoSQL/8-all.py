#!/usr/bin/env python3
"""Contains list_all function"""


def list_all(mongo_collection):
    """Retrieves collection"""
    collection = mongo_collection.find()
    if not collection:
        return []
    else:
        return collection
