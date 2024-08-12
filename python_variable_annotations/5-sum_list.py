#!/usr/bin/env python3
"""Contains sum_list function"""
import typing


def sum_list(input_list: typing.List[float]) -> float:
    """Returns sum of a list of float
    Args:
        input_list: list of float
    Return: sum of all floats in input_list
    """
    return sum(input_list)
