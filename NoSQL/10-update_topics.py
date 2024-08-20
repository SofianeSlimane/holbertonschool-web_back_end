#!/usr/bin/env python3
"""Contains update_topics"""


def update_topics(mongo_collection, name, topics):
    """ Updates or creates in a document if they
    don't exist."""
    update = mongo_collection.update_many(
        {
            "name": name
        },
        {
            "$set": {"topics": topics},

        }

    )
