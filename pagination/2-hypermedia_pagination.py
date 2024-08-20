#!/usr/bin/env python3
"""Contains index range function"""
import csv
import math
from typing import List, Any


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Returns range of indexes"""
    return ((page_size * page) - page_size, page_size * page)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get specific page, returns rows in that page"""
        assert type(page) is int
        assert type(page_size) is int
        assert page > 0
        assert page_size > 0
        indexRanges = index_range(page, page_size)
        rowIndexMax = indexRanges[1]
        rowIndexMin = indexRanges[0]
        dataSet = self.dataset()
        if rowIndexMax > len(dataSet) or rowIndexMin > len(dataSet):
            return []

        return dataSet[rowIndexMin:rowIndexMax]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict[str, Any]:
        """Returns dictionary with page informations"""
        data = self.get_page(page, page_size)
        next_page = page + 1 if not page + 1 > page_size else None
        prev_page = page - 1 if not page - 1 <= 0 else None
        LenFullDataSet = len(self.dataset())
        total_pages = (LenFullDataSet / page_size) / 2
        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": math.ceil(total_pages)
        }
