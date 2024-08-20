#!/usr/bin/env python3
"""Contains index range function"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Returns range of indexes"""
    return ((page_size * page) - page_size, page_size * page)
