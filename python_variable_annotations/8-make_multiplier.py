#!/usr/bin/env python3
"""Contains make_multiplier function"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """Defines and returns my_func"""
    def my_func(my_float):
        """Returns the product of my_float and multiplier"""
        return my_float * multiplier
    return my_func
