#!/usr/bin/env python3
"""Contains sum_mixed_list function"""
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    """Returns sum of every value in a list with both integers and floats"""
    return sum(mxd_lst)
