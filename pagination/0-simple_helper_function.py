#!/usr/bin/env python3
"""Contains index range function"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Returns range of indexes"""
    if (page == 1):
        return (0, page_size * page)
    else:
        return (page * 10, page_size * page)
